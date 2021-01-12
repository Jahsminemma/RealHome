let setSplitScroll = ()=>{
    const controller  = new ScrollMagic.Controller();
       let scene1 = new ScrollMagic.Scene({
        triggerElement: '.agents .img-snap',
        triggerHook: 0,
    })
    .setPin('#agents .img-snap')
    .addTo(controller);
    let scene2 = new ScrollMagic.Scene({
        duration:650,
        triggerElement :'.agents .col-left',
        triggerHook: 0.3
    })
    .setPin('.agents .col-left')
    .addTo(controller);
    
    controller.addScene([
        scene1,
        scene2
    ])
}
setSplitScroll()