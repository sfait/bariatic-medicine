function changeTitle() {
    const message = "Return to the website";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function showTooltip() {
    const questionSigns = document.querySelectorAll(".question-sign-wrapper");

    for (let i = 0; i < questionSigns.length; i++) {
        questionSigns[i].addEventListener("mouseover", function() {
            const tooltip = this.querySelector(".tooltip");
            tooltip.classList.add("show-tooltip");
        })

        questionSigns[i].addEventListener("mouseout", function() {
            const tooltip = this.querySelector(".tooltip");
            tooltip.classList.remove("show-tooltip");
        })
    }

}

// function useScrollReveal() {
//     const slideLeft = {
//         distance: "150%",
//         origin: "left",
//         delay: "250",
//         opacity: null
//     };
//
//     const slideRight = {
//         distance: "150%",
//         origin: "right",
//         delay: "250",
//         opacity: null
//     };
//
//     ScrollReveal().reveal(".second-header, .hero-paragraph, .description-text, .gallery-wrapper, .footer-wrapper", { delay: 300 });
//     ScrollReveal().reveal(".environment-text", slideLeft);
//     ScrollReveal().reveal(".the-senses-text, .food-text", slideRight);
// }
//
// function showAnimations() {
//     const mobile = window.matchMedia("screen and (min-width: 1000px)");
//
//     if (mobile.matches) {
//         useScrollReveal();
//     }
//
//     mobile.addListener( function(mobile) {
//         if (mobile.matches) {
//             useScrollReveal();
//         }
//     });
// };

const init = () => {
    changeTitle();
    showTooltip();
}

document.addEventListener("DOMContentLoaded", init);
