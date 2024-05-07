const face = document.querySelector("div.face");
const nose = document.querySelector("div.nose");
const hair = document.querySelector("div.outer-hair");
const btn1 = document.querySelector("button.btn1");
const btn2 = document.querySelector("button.btn2");
const btn3 = document.querySelector("button.btn3");
const btn4 = document.querySelector("button.btn4");
const btn5 = document.querySelector("button.btn5");

const faceinput = document.querySelector("input.faceinput");
const noseinput = document.querySelector("input.noseinput");
const hairinput = document.querySelector("input.hairinput");

faceinput.addEventListener("input", function(){
    console.log(faceinput)
    face.style.borderBottomLeftRadius = faceinput.value+"px";
    face.style.borderBottomRightRadius = faceinput.value+"px";
})
noseinput.addEventListener("input", function(){
    nose.style.height = noseinput.value+"px";
})
hairinput.addEventListener("input", function(){
    hair.style.height = hairinput.value+"px";
})
btn1.addEventListener("click", function(){
    face.style.backgroundColor = "#FFE0D9";
    nose.style.backgroundColor = "#FFCCC0";
    btn1.classList.toggle("clicked")
    btn2.classList.remove("clicked")
    btn3.classList.remove("clicked")
    btn4.classList.remove("clicked")
    btn5.classList.remove("clicked")
})
btn2.addEventListener("click", function(){
    face.style.backgroundColor = "#FFC8BC";
    nose.style.backgroundColor = "#FFA996";
    btn1.classList.remove("clicked")
    btn2.classList.toggle("clicked")
    btn3.classList.remove("clicked")
    btn4.classList.remove("clicked")
    btn5.classList.remove("clicked")
})
btn3.addEventListener("click", function(){
    face.style.backgroundColor = "#C67F72";
    nose.style.backgroundColor = "#C77363";
    btn1.classList.remove("clicked")
    btn2.classList.remove("clicked")
    btn3.classList.toggle("clicked")
    btn4.classList.remove("clicked")
    btn5.classList.remove("clicked")
})
btn4.addEventListener("click", function(){
    face.style.backgroundColor = "#9C6D64";
    nose.style.backgroundColor = "#895248";
    btn1.classList.remove("clicked")
    btn2.classList.remove("clicked")
    btn3.classList.remove("clicked")
    btn4.classList.toggle("clicked")
    btn5.classList.remove("clicked")
})
btn5.addEventListener("click", function(){
    face.style.backgroundColor = "#573B30";
    nose.style.backgroundColor = "#42261B";
    btn1.classList.remove("clicked")
    btn2.classList.remove("clicked")
    btn3.classList.remove("clicked")
    btn4.classList.remove("clicked")
    btn5.classList.toggle("clicked")
})