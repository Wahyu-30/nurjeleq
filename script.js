document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    yesButton.addEventListener("click", function () {
        window.location.href = "yes.html";
    });

    noButton.addEventListener("mouseenter", function () {
        moveButton(noButton);
    });
});

function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transition = "all 0.3s ease-in-out";
}
