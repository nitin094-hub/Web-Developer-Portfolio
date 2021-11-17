// slider
document.querySelector(".fa-chevron-left").addEventListener("click",left_move)
document.querySelector(".fa-chevron-right").addEventListener("click",right_move)
let maxlen=document.querySelectorAll(".testimonial_box").length;
let idx=0;
let parent=document.querySelectorAll(".dots li");
let selectd=document.querySelector(".dots li");
selectd.classList.add("active");
document.querySelectorAll(".dots li").forEach((indicator,index)=>{
    indicator.addEventListener("click",()=>{
        let cor=document.getElementById("coursal");
        idx=index;
        selectd.classList.remove("active");
        cor.style.transform=`translate(${idx*-33}%)`;
        indicator.classList.add("active");
        selectd=indicator;
    })
})
function right_move(){
    let cor=document.getElementById("coursal");
    idx++;
    
    if(idx==maxlen){
        idx=2;
    }
    
    parent[idx].classList.add("active");
    if(selectd!=parent[idx]){
        
        selectd.classList.remove("active");
    }
    selectd=parent[idx];
    
    
    cor.style.transform=`translate(${idx*-33}%)`;
}
function left_move(){
    let cor=document.getElementById("coursal");
    if(idx>0) idx--;
    parent[idx].classList.add("active");
    if(selectd!=parent[idx]){
        
        selectd.classList.remove("active");
    }
    selectd=parent[idx];
    cor.style.transform=`translate(${idx*-33}%)`;
}
// slider

// media query start

const mediaQuery = window.matchMedia('(max-width: 1208px)')
function handleTabletChange(e){
    if (e.matches) {
        let l=document.querySelectorAll(".common");
        l.forEach(item=>{
            item.style.width="877px";
        })
    }
}
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

const mediaQuery1 = window.matchMedia('(max-width: 916px)')
function handleTabletChange(e){
    if (e.matches) {
        let l=document.querySelectorAll(".common");
        l.forEach(item=>{
            item.style.width="100%";
        })
    }
}
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

//media query end 

// hamburger
let x=document.getElementById("hamburger");
x.addEventListener("click",()=>{

    if(document.getElementById("nav_elements").style.display=="none"){
        document.getElementById("nav_elements").style.display="block";
    }
    else{
        document.getElementById("nav_elements").style.display="none";
    // console.log("hello");
    }
    
})

// write
// let element=document.querySelector(".txt1");
// let text=document.querySelectorAll(".txt");
// let val=100;
// setInterval(set,1000)
// function set(){
//     // element.style.setProperty('--after',"#1e1e1e")
//     // element.style.setProperty('--back',"typing 1.5s steps(16) infinite")
//     text.forEach(item=>{
//         item.style.transform=`translateY(-${val}%)`;
//     })
//     val+=100;
//     if(val==400) val=100;
// }


// let real_style = window.getComputedStyle(element, '::before')
// real_style.display="none";
// console.log(real_style.display);
// real_style.animation="none";



