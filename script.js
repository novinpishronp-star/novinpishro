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

// ===========================
// RIPPLE EFFECT
// ===========================

document.querySelectorAll(".glass-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        circle.classList.add("ripple");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        circle.style.width=size+"px";
        circle.style.height=size+"px";

        circle.style.left=(e.clientX-rect.left-size/2)+"px";
        circle.style.top=(e.clientY-rect.top-size/2)+"px";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});
