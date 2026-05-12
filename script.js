  // <!-- =====================================================
  //      JAVASCRIPT  — 2 simple features
  //      1. Navbar shadow on scroll
  //      2. Fade-in elements when they enter the viewport
  //      3. Language toggle between English and Hindi
  // ===================================================== -->
    /* ---------------------------------------------------
       1. Add shadow to nav when user scrolls down
    --------------------------------------------------- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });


    /* ---------------------------------------------------
       2. Fade-up animation using Intersection Observer
          When a .fade-up element enters the viewport,
          add the .visible class to trigger the CSS animation
    --------------------------------------------------- */
    const fadeElements = document.querySelectorAll('.fade-up');

    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target); // animate only once
        }
      });
    }, {
      threshold: 0.12,                    // trigger when 12% visible
      rootMargin: '0px 0px -40px 0px'    // slight offset from bottom
    });

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });


    /* ---------------------------------------------------
       3. Language Toggle
          - Toggles the 'lang-hi' class on <body>
          - CSS shows .hi elements and hides .en elements
          - Button label switches to show current mode
    --------------------------------------------------- */
    var currentLang = 'en'; // start in English

    function toggleLanguage() {
      var btn = document.getElementById('lang-toggle');

      if (currentLang === 'en') {
        // Switch to Hindi
        document.body.classList.add('lang-hi');
        document.documentElement.lang = 'hi';
        btn.textContent = 'English';
        currentLang = 'hi';
      } else {
        // Switch back to English
        document.body.classList.remove('lang-hi');
        document.documentElement.lang = 'en';
        btn.textContent = 'हिंदी';
        currentLang = 'en';
      }
    }