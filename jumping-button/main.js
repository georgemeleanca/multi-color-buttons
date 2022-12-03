let button = document.getElementById("flip-flop");
button.addEventListener("click", function () {
    if (button.innerHTML === "Go Right!") {
    button.style.float = "right";
    button.innerHTML = "Go Left!";
    }
    else {
        button.style.float = "left";
        button.innerHTML = "Go Right!";
    }
})