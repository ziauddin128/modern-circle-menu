let active = 3;

let smcircle = document.querySelectorAll(".smcircle");
let seconds = document.querySelectorAll(".second");

gsap.to(smcircle[active - 1], {
    backgroundColor: "#000",
    color: "#fff"
});

gsap.to(seconds[active - 1], {
    opacity: 1
});

smcircle.forEach(function(item, index)
{
    item.addEventListener("click", function()
    {
        gsap.to("#circle", {
            rotate: (3 - (index + 1)) * 10,
            ease: "expo.inOut"
        });

        panelGray();
        secondGray();

        gsap.to(this, {
            backgroundColor: "#000",
            color:"#fff"
        })

        gsap.to(seconds[index], {
            opacity: 1
        })
    })
})

function panelGray()
{
    gsap.to(smcircle, {
        backgroundColor: "#cccc",
        color: "#000"
    })
}

function secondGray()
{
    gsap.to(seconds, {
       opacity: .5
    })
}


gsap.to("#circle", {
    rotate: 0,
    duration: 2,
    ease: "expo.inOut"
});
