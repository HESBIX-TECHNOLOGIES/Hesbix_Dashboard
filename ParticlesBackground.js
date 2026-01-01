import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { 
              value: 200, // BOHOT ZYADA
              density: { 
                enable: true, 
                value_area: 400 // SMALL AREA = DENSE
              }
            },
            color: { 
              value: '#ffffff' // PURE WHITE
            },
            shape: { 
              type: 'circle'
            },
            opacity: {
              value: 0.9, // ALMOST SOLID
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
              }
            },
            size: {
              value: 3, // MEDIUM SIZE
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.5,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 80, // BOHOT QAREEB
              color: '#3b82f6',
              opacity: 0.8, // DARK LINES
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: true, // YEH CHAHIYE!
                rotateX: 800,
                rotateY: 1600
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'attract' // ATTRACT MODE
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              attract: {
                distance: 100, // CURSOR SE 100px ANDAR
                duration: 0.4,
                speed: 1
              },
              push: {
                particles_nb: 8
              }
            }
          },
          retina_detect: true
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="particles-js" className="particles-container"></div>;
};

export default ParticlesBackground;