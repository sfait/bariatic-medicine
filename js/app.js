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

function sendForm() {
    const btn = document.querySelector(".form-btn");

    btn.addEventListener("click", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;



        // alert("Wysłano formularz");

        // console.log(email);
        // console.log(phone);
    })
}

const init = function() {
    showTooltip();
    sendForm();
}

document.addEventListener("DOMContentLoaded", init);
