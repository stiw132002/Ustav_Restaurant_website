var menu =document.querySelector("nav h2  .ri-menu-fill")
var nav =document.querySelector("#header #nav-right")
var close = document.querySelector("#nav-right h1 ")

menu.addEventListener("click",function(){
    nav.style.right="0%"

})

close.addEventListener("click",function(){
    nav.style.right="-50%"
})



gsap.from("#p1-footer",{
    scrollTrigger:{
        trigger:"#p1-footer",
        scroller:"body",

    },
    opacity:0,
    y:100,
    duration:1,
    delay:.7
})




gsap.from("#page2-right",{
    scrollTrigger:{
        trigger:"#page2-right",
        scroller:"body",

    },
    opacity:0,
    y:100,
    duration:1,
    delay:1.5,
})


gsap.from("#page3-left h1",{
    scrollTrigger:{
        trigger:"#page3-left",
        scroller:"body",

    },
    opacity:0,
    y:100,
    duration:1,
    delay:1.5,
})

gsap.from("#page3-left h2",{
    scrollTrigger:{
        trigger:"#page3-left ",
        scroller:"body",

    },
    opacity:0,
    y:100,
    duration:1,
    delay:2.5,
})


gsap.from("#page4-upper",{
    scrollTrigger:{
        trigger:"#page4-upper ",
        scroller:"body",

    },
    opacity:0,
    y:100,
    duration:1,
    delay:1.5,
})


gsap.from("#menu-p1",{
    scrollTrigger:{
        trigger:"#menu-p1",
        scroller:"body",

    },
    opacity:0,
    y:100,
    duration:1,
    delay:1,
})


gsap.from("#page2-left img",{
    scrollTrigger:{
        trigger:"#page2-left img",
        scroller:"body",

    },
    opacity:0,
    x:-200,
    duration:1,
    delay:.5,
})

gsap.from("#page3-image",{
    scrollTrigger:{
        trigger:"#page3-image",
        scroller:"body",

    },
    opacity:0,
    rotate:360,
    duration:1,
    delay:2,
})


gsap.from("#page4-lower-left img ",{
    scrollTrigger:{
        trigger:"#page4-lower-left",
        scroller:"body",

    },
    opacity:0,
    x:-200,
    duration:1,
    delay:1.5,
})

gsap.from("#page4-lower-right-upper img ",{
    scrollTrigger:{
        trigger:"#page4-lower-right-upper",
        scroller:"body",

    },
    opacity:0,
    x:200,
    duration:1,
    delay:1.5,
})

gsap.from("#page4-lower-right-lower-left img ",{
    scrollTrigger:{
        trigger:"#page4-lower-right-lower-left img",
        scroller:"body",

    },
    opacity:0,
    y:200,
    duration:1,
    delay:1.5,
})

gsap.from("#page4-lower-right-lower-right img ",{
    scrollTrigger:{
        trigger:"#page4-lower-right-lower-right img",
        scroller:"body",

    },
    opacity:0,
    x:300,
    duration:1,
    delay:1.5,
})