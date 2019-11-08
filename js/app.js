function changeTitle() {
    const message = "Wróć na Bariatic Medicine";
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
}

document.addEventListener("DOMContentLoaded", init);
