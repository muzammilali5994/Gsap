// gsap.to("#box",{
//     x:500,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     stagger:1,
//     repeat : -1,
//     yoyo:true
// })

gsap.from("#page1 .box",{
    scale:0,
    duration:1,
    rotate:360
})
gsap.from("#page2 .box h1",{
    x:-500,
    
    duration:1,
    yoyo:true,
    repeat:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller :"body",
        markers:true,
        start:"top 40%",
        color:"red",
        
    }
})
gsap.from("#page3 .box",{
    scale:0,
    repeat: -1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 .box",
        scroller :"body",
        markers:true,
        start:"top 80%"
    }
})