let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = modal ? modal.lastElementChild : null;
let choosePlanButtons = document.querySelectorAll(".plan button");

for (let choosePlanButton of choosePlanButtons) {
    choosePlanButton.addEventListener("click", () => {
        // backdrop.style.display = "block";
        // modal.style.display = "block";
        backdrop.classList.add("open");
        modal.classList.add("open");
    });
}

if (modalNoButton) {
    modalNoButton.addEventListener("click", () => {
        // backdrop.style.display = "none";
        // modal.style.display = "none";
        backdrop.classList.remove("open");
        modal.classList.remove("open");
    });
}

toggleButton.addEventListener("click", () => {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
});

backdrop.addEventListener("click", () => {
    // backdrop.style.display = "none";
    // mobileNav.style.display = "none";
    // modal.style.display = "none";
    backdrop.classList.remove("open");
    if (modal) modal.classList.remove("open");
    mobileNav.classList.remove("open");
});
