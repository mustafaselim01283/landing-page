
var imges=Array.from(document.querySelectorAll('#work figure img')) 
var highlightbox=document.querySelector('#highlightbox')
var lightbox=document.getElementById("lightbox")
var close =document.querySelector("#close")
var pre=document.querySelector("#pre")
var next=document.querySelector("#next")

var imgindex=0;


for(let i=0;i<imges.length;i++){
    imges[i].addEventListener('click',function(even){
        highlightbox.classList.replace("d-none","d-flex")
        let imgsrc=even.target.getAttribute('src')
        imgindex=imges.indexOf(even.target)
        lightbox.style.backgroundImage=`url(${imgsrc})`
        
        even.stopPropagation()

    })
}

close.addEventListener("click",function(eve){
    highlightbox.classList.replace("d-flex","d-none")
    eve.stopPropagation()
})

pre.addEventListener("click",function(e){
    imgindex--;
    if(imgindex<0){imgindex=imges.length-1}
    lightbox.style.backgroundImage=`url(${imges[imgindex].getAttribute('src')})`
    e.stopPropagation()
})
next.addEventListener("click",function(ev){
    imgindex++
    if(imgindex>=imges.length){imgindex=0}
    lightbox.style.backgroundImage=`url(${imges[imgindex].getAttribute('src')})`
    ev.stopPropagation()
})

document.addEventListener('click',function(e){
    if(e.target!=lightbox){
        highlightbox.classList.add("d-none")
    }
    e.stopPropagation()
})


let about=$('#about').offset().top
$(window).scroll(function(){
    let top=$(window).scrollTop()
    
    if(top>about-50){
        $('nav').css('backgroundColor','rgba(0,0,0,0.7)')
        $("#arrow").fadeIn(1000);
    }
    else{
        $('nav').css('backgroundColor','transparent')
        $('#arrow').fadeOut(1000)
    }
})

$('a[href ^="#"]').click(function(e){
let sec=e.target.getAttribute('href')
let secoff=$(sec).offset().top
$('html').animate({scrollTop:secoff}, 2000)
})

$("#arrow").click(function(){
    $('html').animate({scrollTop:0}, 2000)
})



