let button = document.getElementById("change-color");

button.addEventListener("click", function () {
    if (button.style.backgroundColor === "red") {
        button.style.backgroundColor = "buttonface";
    }
    else {
        button.style.backgroundColor = "red";
    }
});