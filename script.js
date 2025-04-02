document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    const ctaBtn = document.querySelector('.cta-btn');
    const actionBtns = document.querySelectorAll('.action-btn');
    const tradeBtns = document.querySelectorAll('.trade-btn');

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