//Pronblème vh sur microsoft edge et safari c'est différent Chat GpT m'a dit de faire ça
function setViewportHeightVar() {
    const vh = window.innerHeight * 0.01; // 1vh en pixels
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  setViewportHeightVar(); // Exécute au chargement
  window.addEventListener('resize', setViewportHeightVar); // Met à jour à chaque resize
  

//Réactualisation de la position du scroll
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  window.scrollTo(0, 0);

//PARTIE 1 : For the first time in my whole life
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
            let maxPosition = window.innerHeight-20; // Position maximale

            function scrollToPosition() {
                window.scrollTo(0, position);
                    if (position < maxPosition) {
                        position += 80; 
                        requestAnimationFrame(scrollToPosition); 
                    }
            }
            
            setTimeout(() => {
                console.log("scrolling");
                scrollToPosition();
                setTimeout(changeColor, 1000);
                const message1 = document.getElementById('message1');

                // Affiche le message (glisse depuis la droite)
                setTimeout(() => {
                    message1.classList.add('show');
                }, 1000); // petit délai pour que la transition fonctionne

                // Disparait en glissant vers la droite après 3 secondes
                setTimeout(() => {
                    message1.classList.remove('show');
                    message1.classList.add('hide');
                }, 5500);

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

                setTimeout(() => {
                    window.scrollTo({
                      top: 1100,
                      behavior: 'smooth' 
                    });

                    const message = document.getElementById('message');
                    setTimeout(() => {
                        message.classList.add('show');
                    }, 2000);
                    setTimeout(() => {
                        message.classList.remove('show');
                        message.classList.add('hide');
                    }, 5500);

                    }, 3500);

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
    })
}

// PART 3 : particules optimisées
window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesEnabled = true;

    class Particle {
        constructor(effect, x, y, color) {
            this.effect = effect;
            this.x = Math.random() * this.effect.canvasWidth;
            this.y = this.effect.canvasHeight;
            this.color = color;
            this.originX = x;
            this.originY = y;
            this.size = this.effect.gap;
            this.dx = 0;
            this.dy = 0;
            this.vx = 0;
            this.vy = 0;
            this.force = 0;
            this.angle = 0;
            this.distance = 0;
            this.friction = Math.random() * 0.6 + 0.15;
            this.ease = Math.random() * 0.2 + 0.005;
        }

        draw() {
            this.effect.context.fillStyle = this.color;
            this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }

        update() {
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance = this.dx * this.dx + this.dy * this.dy;
            this.force = -this.effect.mouse.radius / this.distance;

            if (this.distance < this.effect.mouse.radius) {
                this.angle = Math.atan2(this.dy, this.dx);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }

            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
    }

    class Effect {
        constructor(context, canvasWidth, canvasHeight) {
            this.context = context;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.textX = canvasWidth / 2;
            this.textY = canvasHeight / 2;
            this.fontSize = 160;
            this.lineHeight = this.fontSize * 0.8;
            this.maxTextWidth = canvasWidth * 0.8;
            this.particles = [];
            this.gap = 2; // plus grand = moins de particules = meilleure perf
            this.mouse = {
                radius: 30000,
                x: 0,
                y: 0,
            };

            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.x;
                this.mouse.y = e.y;
            });
        }

        wrapText(text) {
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.context.fillStyle = 'white';
            this.context.strokeStyle = 'white';
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';
            this.context.lineWidth = 3;
            this.context.font = this.fontSize + 'px dazzle-unicase';
        
            const words = text.split(' ');
            const lines = [];
            let line = '';
        
            for (let word of words) {
                let testLine = line + (line ? ' ' : '') + word;
                if (this.context.measureText(testLine).width > this.maxTextWidth) {
                    lines.push(line);
                    line = word;
                } else {
                    line = testLine;
                }
            }
            lines.push(line);
        
            const textHeight = this.lineHeight * lines.length;
            this.textY = this.canvasHeight / 2 - textHeight / 2;
            this.textX = this.canvasWidth / 2;

            lines.forEach((el, index) => {
                const y = this.textY + index * this.lineHeight + this.lineHeight / 2;
                this.context.fillText(el, this.textX, y);
                this.context.strokeText(el, this.textX, y);
            });

        
            this.convertToParticles();
        }
        

        convertToParticles() {
            const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.particles = [];

            for (let y = 0; y < this.canvasHeight; y += this.gap) {
                for (let x = 0; x < this.canvasWidth; x += this.gap) {
                    const index = (y * this.canvasWidth + x) * 4;
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        const color = `rgb(${pixels[index]}, ${pixels[index + 1]}, ${pixels[index + 2]})`;
                        this.particles.push(new Particle(this, x, y, color));
                    }
                }
            }
        }

        render() {
            this.particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    document.fonts.load('160px dazzle-unicase').then(() => {
        effect.wrapText('For the first time');
    });
    function animate() {
        if (particlesEnabled) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect.render();
        }
        requestAnimationFrame(animate);
    }

    animate();

    // Interface pour activer/désactiver les particules depuis d'autres scripts
    window.setParticlesEnabled = function (state) {
        particlesEnabled = state;
    }
});

//FATHER PARTIE
function dropWord() {
    const falling = document.getElementById("falling-word");
    const target = document.getElementById("target-word");

    setParticlesEnabled(false); // pause les particules
    setTimeout(() => setParticlesEnabled(true), 10000); // les relance après 4s
    
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

      document.body.style.backgroundColor = "rgb(255, 50, 1)";


        function showWords() {
            const mots = document.querySelectorAll('.mot');
            let delay = 0; // Délai initial pour le premier mot

            mots.forEach((mot, index) => {
                setTimeout(() => {
                    mot.classList.add('visible'); // Ajoute la classe 'visible' pour afficher le mot
                }, delay);

                delay += 400; 
            }
        )}
    
    // Appeler la fonction pour afficher les mots après 1 seconde
    setTimeout(showWords, 500);
      // Réinitialise le mot want me
      falling.style.opacity = 0;
      falling.style.top = "0px";
      setTimeout(() => {
        window.scrollTo({
          top: 3000,
          behavior: 'smooth' 
        });
      }, 3500);
    };
}

//LETRES QUI BOUGENT I M GOING TO DO IT
const elements = document.querySelectorAll('.bouge');

const blockPosition = window.innerHeight * 3-50;   // 400vh
const finalPosition = window.innerHeight * 4-50;   // 500vh

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

    //LES PARTICULES FONT TOUT BEUGER
    setParticlesEnabled(false); // pause les particules
    setTimeout(() => setParticlesEnabled(true), 10000); // les relance après 4s

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
                // J'avais un problème avec le recalcule l'IA m'a aider a trouver la ligne de code qui fallait
                void el.offsetWidth; // force le reflow
                el.classList.add('envole-leger');
            
                setTimeout(() => {
                el.classList.remove('envole-leger');
                el.classList.add('retombe');
                }, 400); // correspond à la durée de .envole-leger
            });

            //MESSAGE SCROLL PLUS FORT
            const message2 = document.getElementById('message2');
            setTimeout(() => {
                message2.classList.add('show');
            }, 2000); 
            
            setTimeout(() => {
                message2.classList.remove('show');
                message2.classList.add('hide');
            }, 5000);
            
        }
    }
  // Blocage après le saut à finalPosition
  if (finalLocked && y > finalPosition) {
    e.preventDefault();
    window.scrollTo({ top: finalPosition });
}
}, { passive: false }); // PASSIVE FALSE pour bloquer le scroll ET la molette ET le pavé tactile

// Dernière Partie : Grossissement de texte
document.getElementById("monElement").innerHTML = "carpe diem !";
changer.style.transition = "font-size 0.3s ease-in-out";
changer.onmousemove = function()
{
    this.style.fontSize = '5rem';
    this.style.display = 'flex';
    this.style.justifyContent = 'center';
    this.style.alignItems = 'center';
}
changer.onmouseleave = function()
{
    this.style.fontSize = '1rem';
}