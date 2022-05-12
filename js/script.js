const achaLink = document.querySelectorAll('.navbar .navbar-nav .nav-link')


achaLink.forEach(item => {
    item.addEventListener('click', scrollid);
})

function getscroll(elemento){
    const id = elemento.getAttribute('href');
    return document.querySelector(id).offsetTop;
 
}

function scrollid(event){
    event.preventDefault();
    const elemento = event.target; 
    const sesao = getscroll(event.target);
    scrollposition(sesao);
    
}

function scrollposition(sesao){
     smoothScrollTo(0, sesao);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 1000;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

$('#pgsobre, #pgprof, #pgplano').removeClass('estilonav ');
$('#pghome').addClass('estilonav');

$(document).on('scroll', function() {
  console.clear();
  if ($(this).scrollTop() > $('#containerpg1').position().top && $(this).scrollTop() < $('#containerpg2').position().top *0.95) {
      $('#pgsobre, #pgprof, #pgplano').removeClass('estilonav');
      $('#pghome').addClass('estilonav');
  }
  if ($(this).scrollTop() > $('#containerpg2').position().top *0.95 && $(this).scrollTop() < $('#containerpg3').position().top *0.95) {
      $('#pghome, #pgprof, #pgplano').removeClass('estilonav');
      $('#pgsobre').addClass('estilonav');
  }
  if ($(this).scrollTop() > $('#containerpg3').position().top *0.95 && $(this).scrollTop() < $('#containerpg4').position().top *0.95) {
       $('#pgsobre, #pghome, #pgplano').removeClass('estilonav');
      $('#pgprof').addClass('estilonav');
  }
  
  if ($(this).scrollTop() > $('#containerpg4').position().top *0.95) {
      $('#pgsobre, #pgprof, #pghome').removeClass('estilonav');
      $(' #pgplano').addClass('estilonav');
  }
})


