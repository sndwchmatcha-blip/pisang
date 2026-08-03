const intro=document.getElementById("intro");
const introContent=document.querySelector(".intro-content");

const envelopeScene=document.getElementById("envelopeScene");
const envelope=document.getElementById("envelope");
const envelopeFlap=document.getElementById("envelopeFlap");
const paperStack=document.querySelector(".paper-stack");
const lightEffect=document.getElementById("lightEffect");
const openButton=document.getElementById("openButton");

const paper1=document.getElementById("paper1");
const paper2=document.getElementById("paper2");
const paper3=document.getElementById("paper3");
const photoPaper1=document.getElementById("photoPaper1");
const photoPaper2=document.getElementById("photoPaper2");

const typing1=document.getElementById("typing1");
const typing2=document.getElementById("typing2");
const typing3=document.getElementById("typing3");

const photo1=document.getElementById("photo1");
const photo2=document.getElementById("photo2");

const ending=document.getElementById("ending");

const music=document.getElementById("music");

const heartContainer=document.getElementById("heartContainer");
const dustContainer=document.getElementById("dustContainer");
const sparkleContainer=document.getElementById("sparkleContainer");
const particleContainer=document.getElementById("particleContainer");

const TEXT1=`Selamat ulang tahun yang ke-20, Anindita.

Hari ini adalah hari yang sangat spesial, karena dua puluh tahun yang lalu lahirlah seseorang yang kelak akan menjadi alasan bahagiaku.

Terima kasih karena sudah hadir di hidupku.

Semoga setiap langkahmu selalu dipenuhi kesehatan, kebahagiaan, keberuntungan, dan semua hal baik yang kamu impikan.

Aku akan selalu mendoakanmu, hari ini, besok, dan seterusnya.

Happy Birthday, Sayang. ❤️`;

const TEXT2=`Aku benar-benar bersyukur Tuhan mempertemukan aku denganmu.

Kamu adalah rumah tempat aku pulang.

Kamu adalah alasan mengapa aku ingin menjadi pribadi yang lebih baik setiap harinya.

Terima kasih karena selalu bertahan, selalu percaya, dan selalu menjadi Anindita yang begitu berharga untukku.

Aku mencintaimu lebih dari yang bisa dijelaskan dengan kata-kata. ❤️`;

const TEXT3=`Semoga di usia yang baru ini semua doa baikmu satu per satu dikabulkan.

Semoga kita selalu diberi kesempatan untuk tumbuh bersama, saling menggenggam, saling menguatkan, dan saling mencintai.

Aku tidak tahu apa yang akan terjadi di masa depan.

Tapi selama Tuhan masih mengizinkan, aku akan terus memilihmu setiap hari.

Happy Birthday My Love.

I Love You Forever. ❤️`;

const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function fadeIn(element,duration=1000){

    element.style.transition=`opacity ${duration}ms ease`;

    element.style.opacity="1";

}

function fadeOut(element,duration=1000){

    element.style.transition=`opacity ${duration}ms ease`;

    element.style.opacity="0";

}

async function typeWriter(target,text,speed=38){

    target.innerHTML="";

    const cursor=document.createElement("span");

    cursor.className="cursor";

    for(let i=0;i<text.length;i++){

        target.innerHTML=text.substring(0,i+1);

        target.appendChild(cursor);

        if(text[i]===","||text[i]==="."||text[i]==="\n"){

            await sleep(speed*5);

        }else{

            await sleep(speed);

        }

    }

    cursor.remove();

}

async function showPaper(paper){

    paper.classList.add("active");

    paper.animate(
        [
            {
                opacity:0,
                transform:"translate(-50%,-25%) scale(.82)"
            },
            {
                opacity:1,
                transform:"translate(-50%,-50%) scale(1)"
            }
        ],
        {
            duration:1100,
            easing:"cubic-bezier(.22,.61,.36,1)",
            fill:"forwards"
        }
    );

    await sleep(1100);

        }
async function hidePaper(paper){

    paper.animate(
        [
            {
                opacity:1,
                transform:"translate(-50%,-50%) rotate(0deg) scale(1)"
            },
            {
                opacity:0,
                transform:"translate(-50%,-180%) rotate(-8deg) scale(.82)"
            }
        ],
        {
            duration:1200,
            easing:"ease-in-out",
            fill:"forwards"
        }
    );

    await sleep(1200);

    paper.classList.remove("active");

}

async function showPhoto(paper){

    paper.classList.add("active");

    const img=paper.querySelector("img");

    img.animate(
        [
            {
                opacity:0,
                transform:"scale(1.25) rotate(-4deg)",
                filter:"blur(18px)"
            },
            {
                opacity:1,
                transform:"scale(1) rotate(0deg)",
                filter:"blur(0px)"
            }
        ],
        {
            duration:1800,
            easing:"ease",
            fill:"forwards"
        }
    );

    await sleep(1800);

}

async function hidePhoto(paper){

    await sleep(2000);

    paper.animate(
        [
            {
                opacity:1,
                transform:"translate(-50%,-50%) rotate(0deg)"
            },
            {
                opacity:0,
                transform:"translate(-50%,-180%) rotate(7deg)"
            }
        ],
        {
            duration:1200,
            easing:"ease-in-out",
            fill:"forwards"
        }
    );

    await sleep(1200);

    paper.classList.remove("active");

}
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart float";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(8+Math.random()*8)+"s";

    heart.style.opacity=(0.08+Math.random()*0.12).toFixed(2);

    heart.style.transform=`rotate(45deg) scale(${0.6+Math.random()*0.8})`;

    heartContainer.appendChild(heart);

    heart.addEventListener("animationend",()=>heart.remove());

}

function createDust(){

    const dust=document.createElement("div");

    dust.className="dust";

    dust.style.left=Math.random()*100+"vw";

    dust.style.animationDuration=(10+Math.random()*10)+"s";

    dust.style.animationDelay=(Math.random()*2)+"s";

    dustContainer.appendChild(dust);

    dust.addEventListener("animationend",()=>dust.remove());

}

function sparkle(x,y){

    for(let i=0;i<20;i++){

        const spark=document.createElement("div");

        spark.className="spark";

        spark.style.left=x+"px";

        spark.style.top=y+"px";

        spark.style.transform=`translate(${(Math.random()-.5)*90}px,${(Math.random()-.5)*90}px)`;

        sparkleContainer.appendChild(spark);

        spark.addEventListener("animationend",()=>spark.remove());

    }

}

function particleBurst(){

    for(let i=0;i<30;i++){

        const particle=document.createElement("div");

        particle.className="particle";

        particle.style.left=Math.random()*100+"vw";

        particle.style.top=Math.random()*100+"vh";

        particleContainer.appendChild(particle);

        particle.animate(
            [
                {
                    opacity:0,
                    transform:"scale(.2)"
                },
                {
                    opacity:1,
                    transform:"scale(1)"
                },
                {
                    opacity:0,
                    transform:`translate(${(Math.random()-.5)*220}px,${(Math.random()-.5)*220}px) scale(0)`
                }
            ],
            {
                duration:1800,
                easing:"ease-out"
            }
        );

        setTimeout(()=>particle.remove(),1800);

    }

}

setInterval(createHeart,700);

setInterval(createDust,550);
async function playStory(){

    await showPaper(paper1);

    await typeWriter(typing1,TEXT1);

    await sleep(1800);

    await hidePaper(paper1);

    await showPhoto(photoPaper1);

    sparkle(window.innerWidth/2,window.innerHeight/2);

    particleBurst();

    await hidePhoto(photoPaper1);

    await showPaper(paper2);

    await typeWriter(typing2,TEXT2);

    await sleep(1800);

    await hidePaper(paper2);

    await showPhoto(photoPaper2);

    sparkle(window.innerWidth/2,window.innerHeight/2);

    particleBurst();

    await hidePhoto(photoPaper2);

    await showPaper(paper3);

    await typeWriter(typing3,TEXT3);

    await sleep(2500);

    await hidePaper(paper3);

    ending.classList.add("show");

    let volume=1;

    const fade=setInterval(()=>{

        volume-=0.02;

        if(volume<=0){

            volume=0;

            music.pause();

            clearInterval(fade);

        }

        music.volume=volume;

    },120);

}
window.addEventListener("load",async()=>{

    for(let i=0;i<20;i++){

        createHeart();

    }

    for(let i=0;i<40;i++){

        createDust();

    }

    await sleep(1000);

    fadeIn(introContent,1200);

    await sleep(2000);

    fadeOut(introContent,900);

    await sleep(900);

    intro.classList.add("hide");

    envelopeScene.classList.add("show");

    openButton.classList.add("ready");

});

openButton.addEventListener("click",async()=>{

    openButton.disabled=true;

    openButton.classList.remove("ready");

    music.currentTime=21;

    music.volume=0;

    music.play().catch(()=>{});

    const fadeMusic=setInterval(()=>{

        music.volume=Math.min(1,music.volume+0.05);

        if(music.volume>=1){

            clearInterval(fadeMusic);

        }

    },120);

    lightEffect.classList.add("light-on");

    envelopeFlap.classList.add("flap-open");

    paperStack.classList.add("stack-rise");

    sparkle(
        window.innerWidth/2,
        window.innerHeight/2
    );

    await sleep(1700);

    envelope.animate(
        [
            {
                opacity:1,
                transform:"translateY(0px) scale(1)"
            },
            {
                opacity:0,
                transform:"translateY(-45px) scale(.88)"
            }
        ],
        {
            duration:1000,
            easing:"ease-in-out",
            fill:"forwards"
        }
    );

    await sleep(1000);

    envelopeScene.classList.add("hide");

    await playStory();

});
window.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        music.pause();

    }else{

        if(music.currentTime>21){

            music.play().catch(()=>{});
        }

    }

});

window.addEventListener("resize",()=>{

    document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight*0.01}px`
    );

});

document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight*0.01}px`
);
