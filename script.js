let text = document.getElementById("text");

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;

    text.style.top = 50 + value * -0.1 + '%'
})
