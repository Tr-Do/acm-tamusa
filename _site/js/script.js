// Calendar
(function () {
    function start() {
        const el = document.getElementById('calendar');
        if (!el) return;
        const lib = window.VanillaCalendarPro;
        if (!el || !lib) return;
        if (el.__vc_instance) return;
        const { Calendar } = lib;
        const cal = new Calendar('#calendar');
        cal.init();
        el.__vc_instance = cal;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
    window.addEventListener('load', start);
})();

// Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-dark');
    } else {
        nav.classList.remove('bg-dark');
        nav.classList.add('bg-transparent');
    }
});