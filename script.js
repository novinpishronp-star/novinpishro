window.addEventListener("load",()=>{

    const buttons=document.querySelectorAll(".glass-btn");

    buttons.forEach((btn,index)=>{

        setTimeout(()=>{

            btn.classList.add("show");

        },700+(index*90));

    });

});
