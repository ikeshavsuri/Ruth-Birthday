/* ==========================================================
   HAPPY BIRTHDAY RUTH ❤️
   SCRIPT.JS - PART 1
========================================================== */

// Loader
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 800);

    }, 1800);

});

// Elements

const envelope = document.querySelector(".envelope");

const openBtn = document.getElementById("openBtn");

const cover = document.getElementById("cover");

const main = document.getElementById("main");

const music = document.getElementById("music");

// Photos

const photos = [

"assets/images/photo1.jpg",

"assets/images/photo2.jpg",

"assets/images/photo3.jpg",

"assets/images/photo4.jpg",

"assets/images/photo5.jpg"

];

let currentPhoto = 0;

// Open Envelope

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    music.play().catch(() => {});

    setTimeout(() => {

        cover.style.display = "none";

        main.style.display = "block";

        startSlideshow();

        createHearts();

    }, 1500);

});

// =============================
// PHOTO SLIDESHOW
// =============================

const slideImage = document.getElementById("slideImage");

function startSlideshow(){

    setInterval(() => {

        currentPhoto++;

        if(currentPhoto >= photos.length){

            currentPhoto = 0;

        }

        slideImage.style.opacity = 0;

        setTimeout(() => {

            slideImage.src = photos[currentPhoto];

            slideImage.style.opacity = 1;

        },500);

    },3500);

}
/* ==========================================================
   SCRIPT.JS - PART 2
   Hearts • Sparkles • Voucher • Confetti
========================================================== */

// ==========================
// FLOATING HEARTS
// ==========================

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*25)+"px";

        heart.style.animationDuration=(5+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    },350);

}

// ==========================
// SPARKLE CURSOR
// ==========================

document.addEventListener("mousemove",(e)=>{

    const spark=document.createElement("div");

    spark.style.position="fixed";

    spark.style.left=e.clientX+"px";

    spark.style.top=e.clientY+"px";

    spark.style.width="6px";

    spark.style.height="6px";

    spark.style.borderRadius="50%";

    spark.style.background="#ffffff";

    spark.style.pointerEvents="none";

    spark.style.boxShadow="0 0 12px white";

    spark.style.zIndex="99999";

    spark.style.transition="1s";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.style.opacity="0";

        spark.style.transform="scale(3)";

    },20);

    setTimeout(()=>{

        spark.remove();

    },1000);

});

// ==========================
// CONFETTI
// ==========================

function confettiBurst(){

    const colors=[

        "#ff4d88",

        "#ffd700",

        "#00e5ff",

        "#ffffff",

        "#7c4dff"

    ];

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.width="10px";

        c.style.height="10px";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.background=

        colors[Math.floor(Math.random()*colors.length)];

        c.style.pointerEvents="none";

        c.style.borderRadius="2px";

        c.style.zIndex="9999";

        document.body.appendChild(c);

        let y=-20;

        let x=(Math.random()*10)-5;

        const speed=2+Math.random()*4;

        const rotate=Math.random()*360;

        const id=setInterval(()=>{

            y+=speed;

            c.style.top=y+"px";

            c.style.left=(parseFloat(c.style.left)+x)+"px";

            c.style.transform=

            "rotate("+rotate+y+"deg)";

            if(y>window.innerHeight+30){

                clearInterval(id);

                c.remove();

            }

        },16);

    }

}

// ==========================
// CLAIM VOUCHER
// ==========================

const claim=document.getElementById("claim");

claim.addEventListener("click",()=>{

    confettiBurst();

    claim.innerHTML="Voucher Activated ✅";

    claim.disabled=true;

    claim.style.opacity=".75";

    alert(

`🎉 Congratulations Ruth!

Your

🛍️ 1 Day Unlimited Shopping Voucher

has been activated.

❤️ Valid Till 15 August ❤️`

    );

});
/* ==========================================================
   SCRIPT.JS - PART 3
   Fireworks • Rose Petals • Typewriter • Final Effects
========================================================== */

// ==========================
// TYPEWRITER EFFECT
// ==========================

const subtitle = document.querySelector(".subtitle");

if (subtitle) {

    const text = subtitle.innerText;

    subtitle.innerText = "";

    let i = 0;

    function typeWriter(){

        if(i < text.length){

            subtitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter,40);

        }

    }

    setTimeout(typeWriter,1800);

}

// ==========================
// FIREWORKS
// ==========================

function fireworks(){

    for(let i=0;i<30;i++){

        const fire=document.createElement("div");

        fire.style.position="fixed";

        fire.style.left=Math.random()*100+"vw";

        fire.style.top=Math.random()*60+"vh";

        fire.style.width="8px";

        fire.style.height="8px";

        fire.style.borderRadius="50%";

        fire.style.background=

        ["#ff4d88","#ffd700","#00e5ff","#ffffff","#7c4dff"]

        [Math.floor(Math.random()*5)];

        fire.style.boxShadow="0 0 25px currentColor";

        fire.style.pointerEvents="none";

        fire.style.zIndex="99999";

        document.body.appendChild(fire);

        fire.animate([

            {transform:"scale(0)",opacity:1},

            {transform:"scale(8)",opacity:0}

        ],{

            duration:1000,

            easing:"ease-out"

        });

        setTimeout(()=>fire.remove(),1000);

    }

}

setInterval(fireworks,6000);

// ==========================
// ROSE PETALS
// ==========================

function rosePetals(){

    const petal=document.createElement("div");

    petal.innerHTML="🌹";

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-40px";

    petal.style.fontSize=(20+Math.random()*20)+"px";

    petal.style.pointerEvents="none";

    petal.style.zIndex="9999";

    document.body.appendChild(petal);

    let y=-40;

    let x=(Math.random()*4)-2;

    const speed=2+Math.random()*3;

    const id=setInterval(()=>{

        y+=speed;

        petal.style.top=y+"px";

        petal.style.left=(parseFloat(petal.style.left)+x)+"px";

        petal.style.transform=`rotate(${y}deg)`;

        if(y>window.innerHeight+50){

            clearInterval(id);

            petal.remove();

        }

    },16);

}

setInterval(rosePetals,500);

// ==========================
// PAGE TITLE ANIMATION
// ==========================

const titles=[

"❤️ Happy Birthday Ruth ❤️",

"🎂 Enjoy Your Day",

"🛍️ Unlimited Shopping Gift",

"💖 Best Friend Forever"

];

let titleIndex=0;

setInterval(()=>{

    document.title=titles[titleIndex];

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

},2500);

// ==========================
// FINAL MESSAGE
// ==========================

console.log(

"%c🎉 Happy Birthday Ruth ❤️",

"font-size:26px;color:#ff4081;font-weight:bold;"

);

console.log(

"%cMade with ❤️ by Keshav",

"font-size:18px;color:#ffffff;"

);