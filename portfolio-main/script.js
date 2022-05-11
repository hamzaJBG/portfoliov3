let cursor=document.querySelectorAll(".cursor");
let cursorCircle=document.querySelector(".cursor.circle")



window.onmousemove=(e)=>{
    let xPosition=e.clientX;
    let yPosition=e.clientY;

    cursor.forEach(ele=>{
        ele.style.transform=`translate(calc(-50% + ${xPosition}px),calc(-50% + ${yPosition}px))`
    })
}




// menu open/close

let navBar=document.querySelector(".nav-bar")
let menuBtn=document.querySelector(".nav-bar-open")
menuBtn.onclick=()=>{
   navBar.classList.toggle("open")
}

// header transform with scrolling

    let header=document.querySelector(".header")
    window.onscroll=()=>{
        if(window.innerWidth>470){
            if(window.pageYOffset>0){
                header.style='bottom:0';
                navBar.style='top:-20%'
            }
            else{
                header.style='bottom:90%';
                navBar.style='top:80%'
            }
        }

    }


// auto writing 
let words=["23 years old Tunisian ","front end web developper"];
let empty=""
let index=0;
let counter=0;
let introduction=document.querySelector(".introduction p span");

function typing(){
    if(counter>=words.length){
        counter=0
    }
     empty=words[counter].slice(0,index++)
     introduction.textContent=empty;
   if(empty.length>=words[counter].length){
       
        counter++
        index=0;
   

   }
   setTimeout(typing,200)
}

typing()

// main discover btn show Function scroll

let mainBtn=document.querySelector(".discover");

mainBtn.onclick=()=>{
    document.body.style.overflowY="scroll";
    window.sessionStorage.setItem("isVisited","true")
    setTimeout(()=>{
        window.scrollTo({
            top:window.innerHeight/1.5,
            left:0,
            behavior:"smooth"
        })
    },0)

}
window.onload=()=>{
    if(window.sessionStorage.getItem('isVisited')==="true"){
        document.body.style.overflowY="scroll";
    }
}

// btn 3d animation

let animationBtn=document.querySelectorAll(".face2 button");

animationBtn.forEach(btn=>{
    btn.onclick=()=>{
        btn.parentElement.parentElement.classList.add("show")
    }
})


// mouse leave 3d reset 

let project=document.querySelectorAll(".project")

project.forEach(p=>{
    p.onmouseleave=()=>{
        p.classList.remove("show")
    }
})







// contact section Algorythme */ 
let contact=document.querySelector(".contact")
let send=document.querySelectorAll(".fa-chevron-right");


send.forEach(s=>{
    s.onclick=()=>{
        let previousElement=s.previousElementSibling;
        let parentElement=s.parentElement;
        let nextElement=s.parentElement.nextElementSibling;
        console.log(previousElement.placeholder==="YOUR NAME")
       
        if(previousElement.placeholder==="YOUR EMAIL"){
            const emailValidation=/^[a-zA-Z0-9]*(@)[a-zA-Z]*(\.)[a-z-A-Z]*$/
            if (emailValidation.test(previousElement.value)){
                parentElement.classList.remove("valid")
                            nextElement.classList.add("valid")
                            contact.style.backgroundColor="#1E2322"
            }
            else{
                contact.style.backgroundColor="rgb(178, 46, 46)";
                parentElement.style="animation:wrong 0.5s linear ;"
                parentElement.onanimationend=()=>{
                    parentElement.style.animation="none"
                 }
            }
        }
       if(previousElement.placeholder==="YOUR NAME"){
            if(previousElement.value.length>3){
                parentElement.classList.remove("valid")
                            nextElement.classList.add("valid")
                            contact.style.backgroundColor="#1E2322"
            }
            else{
                contact.style.backgroundColor="rgb(178, 46, 46)";
                parentElement.style="animation:wrong 0.5s linear ;"
                parentElement.onanimationend=()=>{
                    parentElement.style.animation="none"
                 }
            }
        }
       else{
           if(previousElement.value.length>3){
            parentElement.classList.remove("valid")
            nextElement.classList.add("valid")
            contact.style.backgroundColor="#1E2322"
           }
           else{
            contact.style.backgroundColor="rgb(178, 46, 46)";
            parentElement.style="animation:wrong 0.5s linear ;"
            parentElement.onanimationend=()=>{
                parentElement.style.animation="none"
             }
           }
       }
    }
})

