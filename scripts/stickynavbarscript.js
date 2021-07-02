//script for sticky homepage search bar
const sticky_searchbar = document.querySelector(".searchformdiv");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 90) {
        sticky_searchbar.classList.add("active");
    }
    else {
        sticky_searchbar.classList.remove("active");
    }
})
//end of script
