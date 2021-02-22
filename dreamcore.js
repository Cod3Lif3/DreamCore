let navtraining = document.getElementById("ourTraining");
let training = document.getElementById("training");
let intro = document.getElementById("intro");

navtraining.addEventListener('mouseover', ()=>{
    intro.style.display =("none");
    training.style.display = ("block");
})

navtraining.addEventListener('mouseleave', ()=>{
    intro.style.display =("block");
    training.style.display = ("none");
})