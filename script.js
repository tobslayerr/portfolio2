AOS.init();

document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.experience-photo-card');
    card.classList.toggle('expanded');
    button.textContent = card.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});


const typed = new Typed('#typed', {
  strings: [
    "Hi, I'm Syahrul Wahyu Romadon",
    "Welcome to my portfolio blog!",
    "Feel free to explore my work and see the stories I love to tell through visuals"
  ],
  typeSpeed: 80,
  backSpeed: 70,
  backDelay: 2000,
  startDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});

  
function playVideo(thumbnail) {
    const wrapper = thumbnail.parentElement;
    const frame = wrapper.querySelector(".video-frame");
    thumbnail.style.display = "none";
    frame.style.display = "block";
}



document.addEventListener('DOMContentLoaded', function () {
   new Splide('#portrait-carousel', {
    type       : 'loop',
    perPage    : 1,
    heightRatio: 1.4,
    pagination : false,
    arrows     : true,    
    autoplay   : true,
    interval   : 3000,
    speed      : 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
}).mount();
});

function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const sendBtn = document.getElementById("sendBtn");
    const sendText = document.getElementById("sendText");
    const loading = document.getElementById("loading");

    if (!name || !message) return;

    sendText.style.display = "none";
    loading.style.display = "inline";

    setTimeout(() => {
      const encodedMessage = encodeURIComponent(`Hai, saya ${name} ingin berbicara mengenai:\n\n${message}`);
      const phone = "6285776869120";
      const url = `https://wa.me/${phone}?text=${encodedMessage}`;

      window.open(url, "_blank");

      sendText.style.display = "inline";
      loading.style.display = "none";

      document.getElementById("contactForm").reset();
    }, 1500); 
  }