var toTop = document.getElementById("toTop");
toTop.addEventListener("click", goUp);

function goUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}