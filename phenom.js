document.getElementById("chatbot-container").addEventListener("click", function (event) {
    if (event.target.id === "close-chatbot") {
        this.classList.remove("show");
    } else {
        this.classList.toggle("show");
    }
});