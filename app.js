document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    burger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".services__card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const moreInfo = card.querySelector(".more-info");
            if (moreInfo.style.display === "block") {
                moreInfo.style.display = "none";
            } else {
                moreInfo.style.display = "block";
            }
        });
    });
});
