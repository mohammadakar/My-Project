let toggle1=document.querySelector(".toggle .fa-gear")
toggle1.onclick=function(){
    this.classList.toggle("fa-spin")
    document.querySelector(".settings-box").classList.toggle("open")
}

const colorsli=document.querySelectorAll(".colors-list li");
colorsli.forEach(li=>{
    li.addEventListener("click",e=>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        localStorage.setItem("color-option",e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(elemnt=>{
            elemnt.classList.remove("active")
        })
        e.target.classList.add("active")

    })
})
let maincolor=localStorage.getItem("color-option")
if(maincolor!==null){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"))
    document.querySelectorAll(".colors-list li").forEach(elem=>{
        elem.classList.remove("active")
   
    if(elem.dataset.color===localStorage.getItem("color-option")){
        elem.classList.add("active")
    }
})

}
let backgroundOp=true;
let backgroundInterval;
let backgroundLocalItem=localStorage.getItem("background_option")
if(backgroundLocalItem!==null){
    if(localStorage.getItem("background_option")==='true'){
        backgroundOp=true;
    }else{
        backgroundOp=false;
    }
    document.querySelectorAll(".random-background span").forEach(elem=>{
        elem.classList.remove("active")
    })
    if(backgroundLocalItem==='true'){
        document.querySelector(".random-background .yes").classList.add("active")
    }else{
        document.querySelector(".random-background .no").classList.add("active")
    }
}

const backgroundSpan=document.querySelectorAll(".random-background span");
backgroundSpan.forEach(span=>{
    span.addEventListener("click",e=>{
       
        handleActive(e)

        if(e.target.dataset.background==='yes'){
           backgroundOp=true;
           randomize();
           localStorage.setItem("background_option",true)
        }else{
            backgroundOp=false;
            clearInterval(backgroundInterval)
            localStorage.setItem("background_option",false)
        }

    })

})
let m=localStorage.getItem("color-option")
if(maincolor!==null){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"))
    document.querySelectorAll(".colors-list li").forEach(elem=>{
        elem.classList.remove("active")
   
    if(elem.dataset.color===localStorage.getItem("color-option")){
        elem.classList.add("active")
    }
})

}
let landing=document.querySelector(".landing-page")
let arrImg=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]



function randomize(){

if(backgroundOp===true){
backgroundInterval=setInterval(()=>{
    let rand=Math.floor(Math.random()*arrImg.length);
    landing.style.backgroundImage='url("images/'+arrImg[rand] +'")'

},5000)
}
}
randomize();
let ourskills=document.querySelector(".skills")
window.onscroll=function(){
    let skillsofsettop=ourskills.offsetTop;
    let skillsHeight=ourskills.offsetHeight;
    let windowHeight=this.innerHeight;
    let windowScrollTop=this.pageYOffset;
    if(windowScrollTop > (skillsofsettop+skillsHeight - windowHeight)){
        let skl=document.querySelectorAll(".skill-box .skill-progress span")
        skl.forEach(skill=>{
            skill.style.width=skill.dataset.progress
        })
    }

}
let images=document.querySelectorAll(".gallery img");
images.forEach(img=>{
    img.addEventListener('click',(e)=>{
        let overlay=document.createElement("div");
        overlay.className='popup-overlay';
        document.body.appendChild(overlay)
        let popupbox=document.createElement("div")
        popupbox.className='popup-box'
        if(img.alt!==null){
            let imgHeading=document.createElement("h3")
            let headingText=document.createTextNode(img.alt)
            imgHeading.appendChild(headingText)
            popupbox.appendChild(imgHeading)
        }
        let popupImage=document.createElement("img")
        popupImage.src=img.src
        popupbox.appendChild(popupImage)
        document.body.appendChild(popupbox)
        let closeBtn=document.createElement("span")
        let closeBtnText=document.createTextNode("X")
        closeBtn.appendChild(closeBtnText)
        closeBtn.className='close-button'
        popupbox.appendChild(closeBtn)
       
    })
});
document.addEventListener("click",(e)=>{
    if(e.target.className==="close-button"){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove()
    }
})

let bullets=document.querySelectorAll(".nav-bullets .bullet");
let links=document.querySelectorAll(".links a")
function scrollToElement(element){
    element.forEach(elem=>{

        elem.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:"smooth"
            })
        })
    })

}
scrollToElement(bullets)
scrollToElement(links)

function handleActive(event){
        event.target.parentElement.querySelectorAll(".active").forEach(elemnt=>{
                elemnt.classList.remove("active")
            })
        event.target.classList.add("active")

}

let bulletsOption=document.querySelectorAll(".bullets-option span")
let bulletsContainer=document.querySelector(".nav-bullets")
let bulletLocal=localStorage.getItem("bullets_option")

if(bulletLocal!==null){  
    bulletsOption.forEach(span=>{
        span.classList.remove("active")
    })
    if(bulletLocal==='block'){
        bulletsContainer.style.display='block';
        document.querySelector(".bullets-option .yes").classList.add("active")
    }else{
        bulletsContainer.style.display='none';
        document.querySelector(".bullets-option .no").classList.add("active")
    }


}

bulletsOption.forEach(span=>{
    
    span.addEventListener("click",(e)=>{
        if(span.dataset.display==="show"){
            bulletsContainer.style.display='block';
            localStorage.setItem("bullets_option",'block')
        }
        else{
            bulletsContainer.style.display='none';
            localStorage.setItem("bullets_option",'null')
        }
        handleActive(e)
    })
})

document.querySelector(".reset-options").onclick=function(){
    localStorage.removeItem("bullets_option")
    localStorage.removeItem("color-option")
    localStorage.removeItem("background_option")
    window.location.reload()
}

let togglebtn=document.querySelector(".toggle-menu")
let theLinks=document.querySelector(".links")

togglebtn.onclick=function(e){
    e.stopPropagation();
    
    this.classList.toggle("menu-active");

    theLinks.classList.toggle("open")
};

document.addEventListener("click",(e)=>{
    if(e.target !== togglebtn && e.target !== theLinks){
       if(theLinks.classList.contains("open")){
        theLinks.classList.remove("open")
        togglebtn.classList.remove("menu-active")
        
       }
        
        

    }
});
theLinks.onclick=function(e){
    e.stopPropagation();
}