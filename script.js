const intro = document.getElementById("intro");
const scene = document.getElementById("scene");

const openBtn = document.getElementById("openBook");
const nextBtn = document.getElementById("nextPage");

const bookClosed = document.getElementById("book-closed");
const bookOpen = document.getElementById("book-open");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const music = document.getElementById("bgMusic");
const openSound = document.getElementById("openSound");
const clickSound = document.getElementById("clickSound");

let currentPage = 1;

/* ================= INTRO ================= */
setTimeout(() => {
  clickSound.play();
  intro.classList.add("light-on");

  setTimeout(() => {
    intro.style.display = "none";
    scene.classList.remove("hidden");
  }, 1000);

}, 2000);

/* ================= OPEN BOOK ================= */
openBtn.onclick = () => {
  openSound.play();

  bookClosed.classList.add("hidden");
  bookOpen.classList.remove("hidden");

  // mulai musik dari detik 21
  music.currentTime = 21;
  music.play();

  loadPage1();
};

/* ================= PAGE 1 ================= */
function loadPage1() {
  page1.innerHTML = `
    <div class="handwriting" id="text1">
      Selamat ulang tahun, kamu yang selalu berhasil membuat hariku lebih berarti.
      Kehadiranmu sederhana, tapi rasanya begitu besar di hidupku.
    </div>
    <img src="assets/foto1.jpg" class="love-img" id="img1">
  `;

  setTimeout(() => {
    document.getElementById("text1").classList.add("show");
  }, 500);

  setTimeout(() => {
    document.getElementById("img1").classList.add("show");
  }, 2000);

  setTimeout(() => {
    nextBtn.classList.remove("hidden");
  }, 3500);
}

/* ================= PAGE 2 ================= */
function loadPage2() {
  page2.innerHTML = `
    <div class="handwriting" id="text2">
      Aku mungkin bukan yang sempurna, tapi aku selalu ingin ada untukmu.
      Di setiap langkahmu, aku ingin jadi bagian kecil yang selalu kamu ingat.
    </div>
    <img src="assets/foto2.jpg" class="love-img" id="img2">
  `;

  setTimeout(() => {
    document.getElementById("text2").classList.add("show");
  }, 500);

  setTimeout(() => {
    document.getElementById("img2").classList.add("show");
  }, 2000);

  setTimeout(() => {
    nextBtn.classList.remove("hidden");
  }, 3500);
}

/* ================= PAGE 3 ================= */
function loadPage3() {
  page3.innerHTML = `
    <div class="handwriting" id="text3">
      Semoga semua hal baik selalu menemukan jalan ke kamu.
      Semoga kamu selalu diberi kebahagiaan, kesehatan, dan mimpi-mimpi yang tercapai.
      
      Dan kalau boleh aku berharap...
      semoga aku tetap jadi bagian dari cerita indahmu.
    </div>
  `;

  setTimeout(() => {
    document.getElementById("text3").classList.add("show");
  }, 500);

  setTimeout(() => {
    // setelah selesai → tutup buku + lampu mati
    setTimeout(closeScene, 2000);
  }, 4000);
}

/* ================= NEXT BUTTON ================= */
nextBtn.onclick = () => {
  clickSound.play();
  nextBtn.classList.add("hidden");

  if (currentPage === 1) {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    currentPage = 2;
    loadPage2();
  } else if (currentPage === 2) {
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    currentPage = 3;
    loadPage3();
  }
};

/* ================= END ================= */
function closeScene() {
  music.volume = 0.5;

  let fade = setInterval(() => {
    if (music.volume > 0.05) {
      music.volume -= 0.05;
    } else {
      music.pause();
      clearInterval(fade);
    }
  }, 200);

  bookOpen.classList.add("hidden");
  bookClosed.classList.remove("hidden");

  scene.classList.add("light-off");

  setTimeout(() => {
    clickSound.play();
  }, 1000);
  }
