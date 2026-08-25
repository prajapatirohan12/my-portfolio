

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Java Programmer",
    "Python Developer",
    "Data Enthusiast",
    "AI/ML Learner",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent = 
            currentWord.substring(0,charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }
    }else{
        typingElement.textContent = 
            currentWord.substring(0,charIndex -1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60:100
    );
}

typeEffect();



const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});



document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



const sections = document.querySelectorAll("section");
const mavLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});



const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        topBtn.style.display = "grid";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });

});



const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit",(event) => {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    contactForm.reset();

});