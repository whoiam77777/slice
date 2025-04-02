document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    const ctaBtn = document.querySelector('.cta-btn');
    const actionBtns = document.querySelectorAll('.action-btn');
    const tradeBtns = document.querySelectorAll('.trade-btn');
    const sliceTitle = document.querySelector('.slice-title');

    // Анимация нарезки заголовка
    const text = sliceTitle.textContent;
    sliceTitle.innerHTML = '';
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.05}s`;
        sliceTitle.appendChild(span);
    });

    loginBtn.addEventListener('click', () => {
        alert('Вход в SliceChain Wallet скоро будет доступен!');
    });

    ctaBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('#wallet').offsetTop,
            behavior: 'smooth'
        });
    });

    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Функция "${btn.textContent}" в разработке!`);
        });
    });

    tradeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Торговля "${btn.textContent}" скоро будет доступна!`);
        });
    });
});