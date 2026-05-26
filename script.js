// ENTER SITE + MUSIC
function enterSite(){

  document.getElementById('intro').style.display='none';
  document.getElementById('mainContent').style.display='block';

  // MUSIC PLAY
  const music = document.getElementById('bgMusic');
  if(music){
    music.play();
    music.volume = 0.3; // optional (low sound)
  }

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
}


// POPUP
function showPopup(){
  document.getElementById('popup').style.display='flex';
}

function closePopup(){
  document.getElementById('popup').style.display='none';
}


// COUNTDOWN TIMER
const birthday = new Date('May 25, 2026 00:00:00').getTime();

const timer = setInterval(() => {

  const now = new Date().getTime();
  const distance = birthday - now;

  // STOP if time passed
  if(distance < 0){
    clearInterval(timer);
    document.getElementById('days').innerHTML = "00";
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

},1000);