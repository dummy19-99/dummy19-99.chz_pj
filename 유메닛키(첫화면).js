function goToFirst() {
    document.body.classList.add('transitioning-down');
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
const menuButton = document.querySelector('.menu-button');
const aside = document.querySelector('aside');
const main = document.querySelector('main')

menuButton.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 방지
    aside.classList.toggle('active'); // active 클래스 토글
    main.classList.toggle('active');
});
});