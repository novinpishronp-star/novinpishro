window.addEventListener("load", () => {

    const buttons = document.querySelectorAll(".glass-btn");

    console.log("Buttons found:", buttons.length);

    buttons.forEach((btn, index) => {

        setTimeout(() => {

            btn.classList.add("show");

            console.log("Show:", index);

        }, 700 + (index * 90));

    });

});
