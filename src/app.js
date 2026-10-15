import { pages } from "./model.js";
import { loadPage } from "./utility.js";

loadPage(pages.home);

document.querySelectorAll("[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const page = e.target.dataset.page;

        loadPage(pages[page]);

        document
            .querySelector(".nav-links")
            .classList.remove("active");
    });
});

document
    .querySelector(".menu-toggle")
    .addEventListener("click", () => {
        document
            .querySelector(".nav-links")
            .classList.toggle("active");
    });