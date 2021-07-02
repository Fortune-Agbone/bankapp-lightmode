// javascript for webpage scroll-to-top button
const toTop = document.querySelector(".btnScrollToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
})

const btnScrollToTop = document.querySelector(".btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
})
// end of javascript for webpage scroll-to-top button

