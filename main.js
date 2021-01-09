const next = document.querySelector(".controls .next")
const prev = document.querySelector(".controls .prev")
const testNext = document.querySelector(".right")
const testPrev = document.querySelector(".left")
const testSlide = document.querySelector(".carousel .slide").children
const slider = document.querySelector(".hero-slide-item").children;
let listingContainer = document.querySelector(".property-container")
let scroller = document.querySelector(".listing-slide");
let scrollNext = document.querySelector(".arrow-right");
let scrollPrev = document.querySelector(".arrow-left")
let item = document.querySelector(".property-details");
itemWidth = item.clientWidth
let navBtn = document.querySelector(".nav .bar");
let navContent = document.querySelector(".nav-content");
let totalSlide = slider.length;
let totalTestSlide = testSlide.length;
let index = 0;
const duration = 6000;
console.log(item.scrollWidth)

navBtn.addEventListener("click", ()=>{
    navBtn.classList.toggle("active")
   navContent.classList.toggle("active");
   let main = document.querySelector("main")
   main.classList.toggle("active")
})

let scrollToNext = ()=>{
    let scrollLeftMax = scroller.scrollWidth - scroller.clientWidth;
    if(scroller.scrollLeft == scrollLeftMax){
    scroller.scrollTo({left:0, top:0, behavior: 'smooth'})
    }else{
        scroller.scrollBy({left:itemWidth, top:0, behavior:'smooth'});
    }
}

let scrollToPrev = ()=>{
    if(scroller.scrollLeft == 0){
    scroller.scrollTo({left:scroller.scrollWidth, top:0, behavior:'smooth'})

    }else{
        scroller.scrollBy({left:-itemWidth, top:0, behavior: 'smooth'})
    }
}

scrollNext.addEventListener("click", scrollToNext)
scrollPrev.addEventListener("click", scrollToPrev)

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
    scrollToNext()
   }
   let timer = setInterval(autoSlide, duration)
   progress()
   
   

//intersection observer for onscroll animation

const scrollSlider = document.querySelectorAll(".slide-up")
const slideIn = document.querySelectorAll(".slide-in")
const slideFromRight = document.querySelectorAll(".slide-right")

options= {
	threshold : 0,
	rootMargin: "80px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{
entries.forEach(entry =>{
	if(!entry.isIntersecting){
		return;
	}
	else{
		entry.target.classList.add('show')
		entry.target.classList.add('show2')
		entry.target.classList.add('show3')
		appearOnScroll.unobserve(entry.target)
	}
})
}, options);
 
scrollSlider.forEach(slide=>{
	appearOnScroll.observe(slide)
})

slideIn.forEach(slidein =>{
	appearOnScroll.observe(slidein)
})

slideFromRight.forEach(slideRight =>{
	appearOnScroll.observe(slideRight)
});
/*appear on scroll ends*/





 