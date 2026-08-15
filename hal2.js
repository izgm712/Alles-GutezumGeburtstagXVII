


function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");

      // posisi horizontal acak
      star.style.left = Math.random() * window.innerWidth + "px";

      // durasi animasi acak (supaya ada variasi kecepatan)
      const duration = 3 + Math.random() * 3; // 3–8 detik
      star.style.animationDuration = duration + "s";

      document.body.appendChild(star);

      // hapus elemen setelah animasi selesai
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    }

    // buat bintang baru setiap 200ms
    setInterval(createStar, 900);


    // untuk element yang muncul setiap awal

    window.onload = function() {
    setTimeout(() => {
      document.getElementById("happy").style.opacity = 1;
    }, 4000); // muncul setelah 3 detik
    
  };
   
   {
    setTimeout(() => {
      document.getElementById("cre").style.opacity = 1;
    }, 3000); // muncul setelah 3 detik
    
  };
{
    setTimeout(() => {
      document.getElementById("lil").style.opacity = 1;
    }, 5600); // muncul setelah 3 detik
    
  };
  {
    setTimeout(() => {
      document.getElementById("lil8").style.opacity = 1;
    }, 5600); // muncul setelah 3 detik
    
  };
  
{
    setTimeout(() => {
      document.getElementById("lil1").style.opacity = 1;
    }, 5600); // muncul setelah 3 detik
    
  };
    {setTimeout(() => {
      document.getElementById("surat").style.opacity = 1;
    }, 30000); // muncul setelah 3 detik
    
  };
  {
    setTimeout(() => {
      document.getElementById("text").style.opacity = 1;
    }, 30000); // muncul setelah 3 detik
    
  };
  {
    setTimeout(() => {
      document.getElementById("ner").style.opacity = 1;
    }, 10000); // muncul setelah 3 detik
    
  };

   $(document).ready(function () {
    // Confetti fire ek baar hi
    confetti({
      particleCount: 500,
      spread: 100,
      origin: { y: 0.27 }
      
    });
  });

  //surat
  const envelope = document.getElementById('envelope');
const kue = document.getElementById('cake');
const stiker = document.querySelectorAll('.stiker');
const gifff = document.getElementById('fig');
const textElement = document.getElementById('text'); // ambil elemen text
const sound = document.getElementById('openSound');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');

  if (envelope.classList.contains('open')) {
    // tampilkan semua pemain
    stiker.forEach(p => p.classList.add('show'));
    kue.classList.add('blur');
    gifff.classList.add('blur');
    textElement.style.opacity = 0 ;
     sound.currentTime = 0;
      sound.play().catch(err => console.log("Audio gagal:", err));

    // ubah teks jadi "CLIK TO CLOSE"
     textElement.innerHTML = `
      <h1 style="margin-top:110px;">CLIK AGAIN </h1>
      <p style="position:relative; top:-12px;">TO CLOSE</p>
    `;
  } else {
    // sembunyikan semua pemain
    stiker.forEach(p => p.classList.remove('show'));
    kue.classList.remove('blur');
    gifff.classList.remove('blur');
    textElement.style.opacity=1;
      sound.pause();
    sound.currentTime = 0;

    // kembalikan teks jadi "CLIK TO OPEN"
    textElement.innerHTML = `
      <p>⬆️⬆️⬆️⬆️</p>
      <h1>CLIK TO OPEN</h1>
      <h1> CLIK AGAIN TO CLOSE</h1>
    `;
  }
});

