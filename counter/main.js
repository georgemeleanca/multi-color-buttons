window.addEventListener("load", function () {
    let button = document.getElementById("count");

    button.addEventListener("click", function () {
        button.innerHTML = +button.innerHTML + 1;
    });
});