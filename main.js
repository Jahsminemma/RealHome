const next = document.querySelector(".controls .next")
const prev = document.querySelector(".controls .prev")
const testNext = document.querySelector(".right")
const testPrev = document.querySelector(".left")
const testSlide = document.querySelector(".carousel .slide").children
const slider = document.querySelector(".hero-slide-item").children;
let index = 0
let totalSlide = slider.length;
let totalTestSlide = testSlide.length
const duration = 6000;

testNext.addEventListener("click", ()=>{
    slide("next")
})

testPrev.addEventListener("click", ()=>{
    slide("prev")
});

prev.addEventListener("click", ()=>{
    slide("prev")
   })
   
   next.addEventListener("click", ()=>{
      slide("next")
   })
   
   let slide = (direction) => {
       progress()
       if(direction =="next"){
       if(index == totalSlide-1 && index== totalTestSlide - 1){
           index = 0
       } else{
           index++
       }
   }
   if(direction == "prev"){
       if(index== 0){
           index= totalSlide - 1
           index = totalTestSlide-1
       }else{
           index--
       }
   }

   // stop autoSlide on click
   clearInterval(timer);

   //start again
   timer = setInterval(autoSlide, duration)


    for(i= 0; i< slider.length; i++){
        slider[i].classList.remove("active")
    }
    for(i= 0; i< testSlide.length; i++){
        testSlide[i].classList.remove("active")
    }
    
    slider[index].classList.add("active")
    testSlide[index].classList.add("active")
   }

   
   let progress = ()=>{
    document.querySelector(".progress").innerHTML ="";
       const div = document.createElement("div")
       div.style.height = "5px";
       div.style.width ="0";
       div.style.position = "absolute"
       div.style.left ="0";
       div.style.top = "0";
       div.style.backgroundColor="#0bb60b";
       div.id="progress";
       div.style.animation ="progress "+ duration/1000 + "s linear"
       document.querySelector(".progress").appendChild(div)
   }

   //autoSlide

   let autoSlide =()=>{
    slide("next")
   }
   let timer = setInterval(autoSlide, duration)
   progress()
   
   





 