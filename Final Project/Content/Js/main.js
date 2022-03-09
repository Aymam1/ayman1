let nums = document.querySelectorAll(".choosee-tow .why-num");
let section = document.querySelector(".why-choose");
let started = false; 

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
}


var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true
});



