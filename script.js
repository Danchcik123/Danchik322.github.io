document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    document.querySelector('.js-scroll-to-contacts').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contacts-section').scrollIntoView({behavior: 'smooth'});
    });

    window.onscroll = function() {
        const backToTopBtn = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    document.getElementById("backToTopBtn").addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});