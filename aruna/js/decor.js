const txt = document.querySelector('#txt_animation');
const stringTxt = txt.textContent;
const splitTxt = stringTxt.split("");

txt.innerHTML = "";

for (let i = 0; i < splitTxt.length; i++) {
    txt.innerHTML += '<span class="fading">' + splitTxt[i] + "</span>";
}

let i = 0;
let timer = setInterval(onTick, 20);

function onTick() {
    if (i === splitTxt.length) {
        endTimer();
        return;
    }
    const s = txt.getElementsByClassName("fading")[i];
    s.classList.add('fadeNow');
    i++;
}

function endTimer() {
    clearInterval(timer);
    timer = null;
}

//----------------------

const catHeader = document.getElementById('ctlg');
catHeader.addEventListener("mouseover", enlargeTxt = () => {
    catHeader.classList.add("zoom-in");
});

catHeader.addEventListener("mouseout", normalizeTxt = () => {
    catHeader.classList.remove("zoom-in");
})


function itllBeAddedSoon() {
    alert("It will be added soon!)")
}

//---------

// const audio = document.getElementById('audio');
// audio.innerHTML = '<audio src="/sound.mp3"></audio>';

const midImages = document.getElementsByClassName('col item');
// console.log(midImages);
for (let i = 0; i < midImages.length; i++) {
    midImages[i].addEventListener("click", () => {
        document.getElementById('hs').play();
    });
}