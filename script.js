// JavaScript for counter animation
        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.counter-number');
            const speed = 200; // The lower the number, the faster the counter

            const animateCounter = (counter) => {
                const target = +counter.getAttribute('data-target');
                const updateCount = () => {
                    const count = +counter.innerText;
                    const increment = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            };

            counters.forEach(animateCounter);
        });
        // Animated text rotation
        const words = ['MERN STACK', 'zapier', 'N8N AUTOMATION', 'GHL Setup','Web Assets ','A2P Compliance & Twilio','Snapshot Deployment','IT Solution', 'WordPress'];
        let currentIndex = 0;
        const animatedText = document.getElementById('animatedText');

        function changeWord() {
            animatedText.classList.add('fade-out');
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                animatedText.textContent = words[currentIndex];
                animatedText.classList.remove('fade-out');
            }, 250);
        }

        // Start animation
        setInterval(changeWord, 2500);

        // Header button hover effects
        const scheduleBtn = document.querySelector('.schedule-btn');
        
        scheduleBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        scheduleBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // Navigation hover effects
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.borderBottom = '2px solid transparent';
                    this.style.borderImage = 'linear-gradient(90deg, #3b82f6, transparent) 1';
                }
            });
            
            link.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.borderBottom = 'none';
                }
            });
        });
        // abut us
        document.addEventListener("DOMContentLoaded", function() {
            const counterElement = document.querySelector('.client-count');
            const finalCount = 6800;
            const duration = 2000;

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let startTimestamp = null;
                        const step = (timestamp) => {
                            if (!startTimestamp) startTimestamp = timestamp;
                            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                            counterElement.textContent = Math.floor(progress * finalCount) + '+';
                            if (progress < 1) {
                                window.requestAnimationFrame(step);
                            } else {
                                counterElement.textContent = finalCount + '+';
                            }
                        };
                        window.requestAnimationFrame(step);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counterElement);
        });
        
        
        
        /**header   */
        // ===== Header Scroll Logic =====
        let lastScroll = 0;
        const header = document.querySelector(".header");
        const hamburger = document.querySelector(".hamburger");
        const nav = document.querySelector("nav");

        // Scroll event
        window.addEventListener("scroll", () => {
          const currentScroll = window.pageYOffset;

          if (currentScroll > lastScroll && currentScroll > 100) {
            // Down scroll → hide header
            header.classList.add("hide");
          } else {
            // Up scroll → show header
            header.classList.remove("hide");
          }

          lastScroll = currentScroll;
        });

        // ===== Mobile Menu Toggle =====
        hamburger.addEventListener("click", () => {
          nav.classList.toggle("active");
        });
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');

            if (hamburger) {
                hamburger.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                });
            }
        });
        
        // testimonia
         document.addEventListener("DOMContentLoaded", () => {
        const userInfoTrack = document.querySelector(".user-info-track");
        const sliderDots = document.querySelectorAll(".slider-controls .dot");
        const slideInterval = 2000;

        let currentIndex = 0;
        const totalSlides = sliderDots.length;

        function updateSlider() {
            const userInfoOffset = -(currentIndex * 100);

            userInfoTrack.style.transform = `translateX(${userInfoOffset}%)`;

            sliderDots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }

        let autoSlide = setInterval(nextSlide, slideInterval);

        sliderDots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                clearInterval(autoSlide);
                currentIndex = i;
                updateSlider();
                autoSlide = setInterval(nextSlide, slideInterval);
            });
        });

        updateSlider();
      });

       // service2
       var serviceSwiper = new Swiper(".homeServiceSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  breakpoints: {
    0: { slidesPerView: 1 },   // mobile
    768: { slidesPerView: 2 }, // tablet
    1024: { slidesPerView: 3 } // desktop
  }
});
/**project2 */
const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsContainer = document.getElementById('projects-container');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.dataset.filter;
            
            // Show/hide cards based on filter
            projectCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    