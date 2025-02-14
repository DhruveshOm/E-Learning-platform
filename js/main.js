(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 50,
        mobile: true,
        live: true,
        callback: function(box) {},
        scrollContainer: null,
        resetAnimation: true
    }).init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add scroll reveal animations
    ScrollReveal().reveal('.course-item', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100
    });

    // Add smooth animations for course cards
    const courseItems = document.querySelectorAll('.course-item');
    courseItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px)';
            item.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
        });
    });

    // Enhanced scroll reveal animations
    ScrollReveal().reveal('.feature-card', {
        delay: 200,
        distance: '40px',
        origin: 'bottom',
        interval: 100,
        duration: 800,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
    });

    ScrollReveal().reveal('.category .content', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        interval: 150,
        duration: 800,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
    });

    // Add parallax effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.page-header');
        if (header) {
            const scrolled = window.pageYOffset;
            header.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    // Smooth navigation highlight
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

})(jQuery);





function toggleChat() {
    const frame = document.getElementById('chat-frame');
    const icon = document.querySelector('.chat-icon');
    if (frame.style.display === 'none') {
        frame.style.display = 'block';
        icon.style.display = 'none';
    } else {
        frame.style.display = 'none';
        icon.style.display = 'flex';
    }
}



function openIframe() {
    // Replace with your actual Render app URL
    const modelURL = "https://model-f0ld.onrender.com";
    document.getElementById("iframe").src = modelURL;
    document.getElementById("iframe-modal").style.display = "block";
}

function closeIframe() {
    document.getElementById("iframe-modal").style.display = "none";
    document.getElementById("iframe").src = ""; // Clear the iframe content
}
