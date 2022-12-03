window.addEventListener("load", function () {
    let button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", function () {
        let span = document.getElementsByTagName("span")[0];
        if (span.classList.contains("ceva"))
            span.classList.remove("ceva");
        else
            span.classList.add("ceva");
    });
});