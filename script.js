document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('.site-nav');

    navToggle.addEventListener('click', function () {
        if (siteNav.style.display === 'flex') {
            siteNav.style.display = 'none';
        } else {
            siteNav.style.display = 'flex';
            siteNav.style.flexDirection = 'column';
        }
    });

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
