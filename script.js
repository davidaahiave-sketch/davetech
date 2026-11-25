
/* =====================================
   DAVETECH | INTERACTIVE FEATURES
   Designed by Davida Ahiave
===================================== */

// 1. REVEAL ELEMENTS ON SCROLL

const revealElements = document.querySelectorAll(
    '.section, .hero-content, .hero-image'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// 2. CREATE FLOATING BACKGROUND PARTICLES

const particleContainer = document.createElement('div');

particleContainer.className = 'particle-container';

Object.assign(particleContainer.style, {
    position: 'fixed',
    inset: '0',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: '-1'
});

document.body.prepend(particleContainer);

for (let i = 0; i < 35; i++) {
    const particle = document.createElement('span');

    particle.className = 'particle';

    const size = Math.random() * 3 + 1;

    Object.assign(particle.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        background: '#b6ff4a',
        borderRadius: '50%',
        opacity: `${Math.random() * 0.35 + 0.1}`,
        boxShadow: '0 0 10px #b6ff4a',
        animation: `particleFloat ${Math.random() * 8 + 6}s ease-in-out infinite alternate`,
        animationDelay: `${Math.random() * -10}s`
    });

    particleContainer.appendChild(particle);
}

// 3. ADD ANIMATION STYLES

const animationStyles = document.createElement('style');

animationStyles.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(35px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .particle {
        will-change: transform;
    }

    @keyframes particleFloat {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            transform: translate3d(15px, -35px, 0);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .reveal {
            opacity: 1;
            transform: none;
            transition: none;
        }

        .particle {
            display: none;
        }
    }
`;

document.head.appendChild(animationStyles);

// 4. UPDATE FOOTER YEAR

const footerParagraphs = document.querySelectorAll('footer p');

if (footerParagraphs.length > 1) {
    footerParagraphs[1].textContent =
        `© ${new Date().getFullYear()} DaveTech. All rights reserved.`;
}

// 5. CONSOLE MESSAGE

console.log(
    '%cWelcome to DaveTech!',
    'color: #b6ff4a; font-size: 20px; font-weight: bold;'
);

console.log(
    'Creativity meets technology. Built by Davida Ahiave.'
);
