
// document.addEventListener('DOMContentLoaded', function() {
//     console.log("DOM fully loaded and parsed");
    
//     window.scrollTo(0, 0);
//     document.body.style.overflowY = 'hidden';

//     /* while (document.documentElement.scrollTop > 100) {
//         document.documentElement.scrollTop = 0;
//         document.body.scrollTop = 0; // For Safari
//         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//         // window.scrollTo(0, 0);
//     } */
// });

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
            
            // setTimeout(() => {
            //     console.log("scrolling");
            //     scrollToPosition();
            // }, 1500);
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

//FATHER PARTIE
function dropWord() {
    const falling = document.getElementById("falling-word");
    const target = document.getElementById("target-word");
  
    falling.style.opacity = 1;
  
    falling.animate(
      [
        { top: "0px" },
        { top: "100px" }
      ],
      {
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards"
      }
    ).onfinish = () => {
      // Remplace le mot father par le want me
      target.textContent = falling.textContent;
  
      // Réinitialise le mot want me
      falling.style.opacity = 0;
      falling.style.top = "0px";
    };
}

//LETRES QUI BOUGENT I M GOING TO DO IT
const elements = document.querySelectorAll('.bouge');

const blockPosition = 1650;
const finalPosition = 2250;

let lastWheelTime = performance.now();
let scrollLocked = true; // pour bloquer à blockPosition
let finalLocked = false; // pour bloquer après finalPosition

// Préparation des animations aléatoires généré par chat GPT car je voyais pas trop comment faire manuellement
elements.forEach(el => {
    const tx = (Math.random() - 0.5) * 500 + 'px';
    const ty = (Math.random() - 0.5) * 500 + 'px';
    const r = (Math.random() * 720 - 360) + 'deg';
    el.style.setProperty('--tx', tx);
    el.style.setProperty('--ty', ty);
    el.style.setProperty('--r', r);
});
  

window.addEventListener('wheel', (e) => {
  const y = window.scrollY;
//Calcul de la vitesse généré par IA car je ne trouvais pas le paramètre adéquat 
  const now = performance.now();
  const delta = Math.abs(e.deltaY);
  const dt = Math.max((now - lastWheelTime) / 1000, 0.01); // secondes
  const speed = delta / dt;
  lastWheelTime = now;

  console.log("Wheel speed:", speed.toFixed(0), "px/s");

  // Blocage entre blockPosition et finalPosition
  if (y >= blockPosition && y < finalPosition && scrollLocked) {
    e.preventDefault();
    window.scrollTo({ top: blockPosition });

    if (speed >= 10500) {
      // Vitesse suffisante : envole, saut à finalPosition, nouveau blocage
      scrollLocked = false;
      finalLocked = true;

      elements.forEach(el => {
        el.classList.remove('retombe');
        el.classList.add('envole');
      });

      document.body.style.overflow = 'auto';
      window.scrollTo({ top: finalPosition, behavior: 'smooth' });

      setTimeout(dropWord, 2000);
    } else {
      // Vitesse faible : envole léger puis retombe
      // Scroll lent : envol partiel puis retombe
        elements.forEach(el => {
            el.classList.remove('envole', 'retombe', 'envole-leger');
            void el.offsetWidth; // force le reflow
            el.classList.add('envole-leger');
        
            setTimeout(() => {
            el.classList.remove('envole-leger');
            el.classList.add('retombe');
            }, 400); // correspond à la durée de .envole-leger
        });

        const message = document.getElementById('message');

        // Affiche le message (glisse depuis la droite)
        setTimeout(() => {
            message.classList.add('show');
        }, 2000); // petit délai pour que la transition fonctionne

        // Disparait en glissant vers la droite après 3 secondes
        setTimeout(() => {
            message.classList.remove('show');
            message.classList.add('hide');
        }, 5000);
        
    }
    }

  // Blocage après le saut à finalPosition
  if (finalLocked && y > finalPosition) {
    e.preventDefault();
    window.scrollTo({ top: finalPosition });
  }
}, { passive: false }); // PASSIVE FALSE pour bloquer le scroll ET la molette ET le pavé tactile
