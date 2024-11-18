let modeChange = document.querySelector(".modeChange");
let banner = document.querySelector(".banner");

modeChange.addEventListener("click", ()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
    strings: ["Natasha", "a Coder", "applying for Jobs"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
})