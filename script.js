window.addEventListener("load", () => {
    // Page fade-in
    document.getElementById("page").classList.add("loaded");

    // Stagger card animations
    const cards = document.querySelectorAll(".card-section");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 120);
    });
});
