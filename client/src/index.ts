import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../../src/types/events";
import Board from "./board";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

export let status = "idle";
export let sessionId = "";
export let gameId = "";
export let player1 = "";
export let player2 = "";
export let myTurn = false;
export let playerNumber = 0;

export function updateColors(useClassic: boolean) {
  const p1Color = useClassic ? "#eb0000" : `#${player1}`;
  const p2Color = useClassic ? "#ebeb00" : `#${player2}`;

  document.getElementById("player1")!.style.color = p1Color;
  document.getElementById("player2")!.style.color = p2Color;

  const cells = document.querySelectorAll(".slot") as NodeListOf<HTMLTableCellElement>;

  cells.forEach((cell) => {
    if (cell.classList.contains("p1")) {
      cell.style.backgroundColor = p1Color;
    } else if (cell.classList.contains("p2")) {
      cell.style.backgroundColor = p2Color;
    }
  });
}

function getGameInfo() {
  socket.emit("getGameInfo", gameId, (error, otherPlayer: string, myId: string, myPlayer: number) => {
    console.log("game info", otherPlayer, myId, myPlayer);

    player1 = myPlayer === 1 ? myId : otherPlayer;
    player2 = myPlayer === 2 ? myId : otherPlayer;
    playerNumber = myPlayer;

    const useClassic = (document.getElementById("usecolors") as HTMLInputElement).checked;
    const p1Color = useClassic ? "#eb0000" : player1;
    const p2Color = useClassic ? "#ebeb00" : player2;

    const isWaiting = otherPlayer === "Waiting for opponent...";

    if (isWaiting) {
      document.getElementById("status")!.innerText = "Waiting for opponent...";

      document.getElementById(`player${myPlayer}`)!.innerText = myId;
      document.getElementById(`player${myPlayer}`)!.style.color = myPlayer === 1 ? p1Color : p2Color;
      document.getElementById(`youp${myPlayer}`)!.removeAttribute("hidden");

      document.getElementById(`player${myPlayer === 1 ? 2 : 1}`)!.innerText = "...";
      return;
    } else {
      document.getElementById("status")!.innerHTML = `Playing against <span style="color: ${
        myPlayer === 1 ? p2Color : p1Color
      }">${otherPlayer}</span>`;
    }

    if (error) {
      document.getElementById("status")!.innerText = otherPlayer;
      return;
    }

    document.getElementById(`player1`)!.innerText = player1;
    document.getElementById(`player2`)!.innerText = player2;

    document.getElementById(`player1`)!.style.color = p1Color;
    document.getElementById(`player2`)!.style.color = p2Color;

    document.getElementById(`youp${myPlayer}`)!.removeAttribute("hidden");

    Board.init();
  });
}

socket.on("connect", () => {
  console.log("connected");

  if (window.location.pathname.startsWith("/g")) {
    status = "in-game";

    gameId = window.location.pathname.split("/")[2];
    document.getElementById("gameid")!.innerText = gameId;
    document.getElementById("gameid")!.style.color = `#${gameId}`;
  }

  sessionId = localStorage.getItem("sessionId") || "";

  if (sessionId) {
    socket.emit("linkSession", sessionId, (newSession, playerId) => {
      sessionId = newSession;
      localStorage.setItem("sessionId", sessionId);

      getGameInfo();
    });
  } else {
    socket.emit("getSession", (sessionId, playerId) => {
      sessionId = sessionId;

      localStorage.setItem("sessionId", sessionId);

      getGameInfo();
    });
  }
});

socket.on("setGame", (gameId: string) => {
  window.location.href = `/g/${gameId}`;
});

socket.on("opponentJoined", (opponentName: string) => {
  document.getElementById(
    "status"
  )!.innerHTML = `Playing against <span style="color: #${opponentName}">${opponentName}</span>`;
  document.getElementById("player2")!.innerText = opponentName;
  document.getElementById("player2")!.style.color = `#${opponentName}`;

  player2 = opponentName;

  Board.init();
});

document.getElementById("gameid")!.addEventListener("click", () => {
  const gameId = window.location.pathname.split("/")[2];
  navigator.clipboard.writeText(`${window.location.origin}/g/${gameId}`);

  document.getElementById("gameid")!.innerText = "Copied!";
  setTimeout(() => {
    document.getElementById("gameid")!.innerText = gameId;
  }, 1000);
});

document.getElementById("usecolors")!.addEventListener("click", () => {
  const useClassic = (document.getElementById("usecolors") as HTMLInputElement).checked;
  updateColors(useClassic);

  console.log("use classic", useClassic);
});

socket.on("gameStart", (info) => {
  console.log("game start", info);

  Board.board = info.board;

  const useClassic = (document.getElementById("usecolors") as HTMLInputElement).checked;
  updateColors(useClassic);

  document.getElementById("status")!.innerText = "Game started!";

  if (info.myTurn) {
    document.getElementById("status")!.innerText = "Your turn!";
    myTurn = true;
  }
});

socket.on("gameUpdate", (gameState) => {
  Board.render(gameState.board);
  myTurn = gameState.myTurn;

  if (myTurn) {
    document.getElementById("status")!.innerText = "Your turn!";
  } else {
    const useClassic = (document.getElementById("usecolors") as HTMLInputElement).checked;
    const color = useClassic
      ? playerNumber === 1
        ? "#ebeb00"
        : "#eb0000"
      : playerNumber === 1
      ? `#${player2}`
      : `#${player1}`;
    document.getElementById("status")!.innerHTML = `<span style="color: #${color}">${player2}</span>'s turn`;
  }
});

socket.on("gameEnd", (iWon, message) => {
    console.log("game end", iWon, message);
    document.getElementById("status")!.innerText = message;
    });
