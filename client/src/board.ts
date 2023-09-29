import { myTurn, playerNumber, socket, status, updateColors } from ".";

export default class Board {
  public static element = document.getElementById("game") as HTMLTableElement;
  public static board: number[][] = [];

  public static init(): void {
    for (let i = 0; i < 6; i++) {
      Board.board[i] = [];
      const row = Board.element.insertRow();
      for (let j = 0; j < 7; j++) {
        Board.board[i][j] = 0;
        const cell = row.insertCell();
        cell.classList.add("slot");
        cell.dataset.x = j.toString();
        cell.dataset.y = i.toString();

        cell.addEventListener("mouseenter", () => {
          // get all cells with the same x and change color

          const x = cell.dataset.x;

          const cells = document.querySelectorAll(`[data-x="${x}"]`);

          cells.forEach((cell) => {
            cell.classList.add("hover");
          });
        });

        cell.addEventListener("mouseleave", () => {
          // get all cells with the same x and change color

          const x = cell.dataset.x;

          const cells = document.querySelectorAll(`[data-x="${x}"]`);

          cells.forEach((cell) => {
            cell.classList.remove("hover");
          });
        });

        cell.addEventListener("click", () => {
          if (!myTurn) return;

          const x = parseInt(cell.dataset.x!);

          if (Board.place(x, playerNumber)) {
            socket.emit("move", x, (valid) => {
              if (!valid) {
                alert("Invalid move!");
              } else {
                Board.render(Board.board);
              }
            });
          } else {
            alert("Invalid move!");
          }
        });
      }
    }
  }

  public static place(x: number, player: number): boolean {
    for (let i = 5; i >= 0; i--) {
      if (Board.board[i][x] === 0) {
        Board.board[i][x] = player;
        return true;
      }
    }
    return false;
  }

  public static render(board: number[][]): void {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        const cell = document.querySelector(`[data-x="${j}"][data-y="${i}"]`) as HTMLTableCellElement;
        console.log(cell);
        cell.classList.remove("p1", "p2");
        if (board[i][j] === 1) {
          cell.classList.add("p1");
        } else if (board[i][j] === 2) {
          cell.classList.add("p2");
        }
      }
    }

    updateColors((document.getElementById("usecolors") as HTMLInputElement).checked);
  }
}
