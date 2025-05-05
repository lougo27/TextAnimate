
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';

    /* while (document.documentElement.scrollTop > 100) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // window.scrollTo(0, 0);
    } */
});

function animationTexte(){
    
    let principalDiv = document.createElement("div");
    principalDiv.classList.add("anim1")
  
    let divOne = document.createElement("div");
    divOne.classList.add("oneone");
  
    let divTwo = document.createElement("div");
    divTwo.classList.add("onetwo");
  
    let divThree = document.createElement("div");
    divThree.classList.add("onethree");
     
    const words = [
      { text: "For", classes: ["petit", "ombre"] },
      { text: "the", classes: ["petit", "ombre"] },
      { text: "first", classes: ["petit", "ombre"] },
      { text: "time", classes: ["petit", "ombre"] },
      { text: "in", classes: ["petit", "ombre"] },
      { text: "my", classes: ["petit", "ombre"] },
      { text: "whole", classes: ["petit", "ombre"] },
      { text: "life,", classes: ["gros", "ombre","bigBoss"] },
      
    ];
  
    const createWordElement = (wordData) => {
      const wordElement = document.createElement("span");
      wordElement.textContent = wordData.text;
      wordElement.classList.add(...wordData.classes);
      return wordElement;
    };

    let anim1 = document.getElementById("anim1");
    
    divOne.appendChild(createWordElement(words[0]));
    divOne.appendChild(createWordElement(words[1]));
  
    divTwo.appendChild(createWordElement(words[2]));
    divTwo.appendChild(createWordElement(words[3]));
    divTwo.appendChild(createWordElement(words[4]));
  
    divThree.appendChild(createWordElement(words[5]));
    divThree.appendChild(createWordElement(words[6]));
    divThree.appendChild(createWordElement(words[7]));
  
    principalDiv.appendChild(divOne)
    principalDiv.appendChild(divTwo)
    principalDiv.appendChild(divThree)
    
    anim1.appendChild(principalDiv);
}
  
animationTexte();

const customCursor = document.getElementById('customCursor');
customCursor.style.display = "none";
document.querySelector(".bigBoss").addEventListener("mouseenter", (e) => {

customCursor.style.display = "block";
e.target.style.color = "white";

});

document.addEventListener('mousemove', function(e) {
customCursor.style.left = e.pageX + 'px';
customCursor.style.top = e.pageY + 'px';
});
  
function clamp(min, val, max) {
    return Math.max(min, Math.min(val, max));
}
  
function updateShadow(event, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    
    // const distance = Math.sqrt(dx * dx + dy * dy);
  
    const shadowX = -clamp(-3, dx / 15, 3);
    const shadowY = -clamp(-3, dy / 15, 3);
  
    element.style.setProperty("--shadow-x", `${shadowX}px`);
    element.style.setProperty("--shadow-y", `${shadowY}px`);
}
  

function updateRadialGradient(event, element) {
    const { clientX: x, clientY: y } = event;
    const xPercent = (x / window.innerWidth) * 100;
    const yPercent = (y / window.innerHeight) * 100;
    
    element.style.setProperty("--x", `${xPercent}%`);
    element.style.setProperty("--y", `${yPercent}%`);
  
}
  
document.addEventListener("mousemove", (event) => {
document.querySelectorAll(".ombre").forEach((span) => {
    updateShadow(event, span);
});
updateRadialGradient(event, document.querySelector("#eclairage"));
});

let radius = 40;

  
document.querySelector(".bigBoss").addEventListener("mouseenter", (e) => {
    e.target.style.color = "white";
    
        const animateGradient = window.setInterval(() => {
        radius = radius * 1.3;
        document.querySelector("#eclairage").style.setProperty("--r", `${radius}vw`);

        if (radius >= 10000) {
            clearInterval(animateGradient);
            let position = 0; // Position initiale
            let maxPosition = 500; // Position maximale
            
            function scrollToPosition() {
                window.scrollTo(0, position);
                    if (position < maxPosition) {
                        position += 10; 
                        requestAnimationFrame(scrollToPosition); 
                    }
            }
            
            setTimeout(() => {
                console.log("scrolling");
                scrollToPosition();
            }, 1500);
        }

    }, 30);
    

    
    
});
    






//PARTIE 2 : I know what I want to do
let chooseMovibleElement;
const move = function(element){
    const elements = document.querySelectorAll('.movible');

    elements.forEach(element => {
        element.addEventListener("mousedown", () => {
            element.style.position = "absolute";
            chooseElement = element;

            document.onmousemove = (e) => {
                let x = e.pageX
                let y = e.pageY

                chooseElement.style.left = x -150 + "px";
                chooseElement.style.top = y -150 + "px";
            }
        })
    })

    document.onmouseup = () => {
        chooseElement = null;
    }
}

function changeColor() {
    let colorElements = document.querySelectorAll('.color');
    colorElements.forEach(element => {
        element.style.color = "rgb(255, 112, 0)";
    });

    document.body.style.overflowY = 'scroll';
}

setTimeout(changeColor, 3000);

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 2150) {
//         window.scrollTo(0, 2150);

//         let fallingElements = document.querySelectorAll('.tombe');
//         let fatherElement = document.querySelector('.father');

        
//     }
// });