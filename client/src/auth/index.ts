window.addEventListener("DOMContentLoaded", async () => {
    const authElement = document.getElementById("auth")!;
    const loginElement = document.getElementById("login")!;
    const iconElement = document.getElementById("icon")!;

    const res = await fetch("/auth", {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();

    if (data.error) {
        iconElement.setAttribute("hidden", "true");
        loginElement.removeAttribute("hidden");
    }

})