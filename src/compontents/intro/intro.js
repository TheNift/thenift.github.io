import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [text, setText] = useState('');
  const [isTop, setIsTop] = useState(false);
  const anim = [
    { t: ">", ms: 400 },
    { t: ">J", ms: 200 },
    { t: ">JA", ms: 200 },
    { t: ">JAC", ms: 200 },
    { t: ">JACK", ms: 200 },
    { t: ">JACK ", ms: 200 },
    { t: ">JACK K", ms: 200 },
    { t: ">JACK KI", ms: 200 },
    { t: ">JACK KIL", ms: 200 },
    { t: ">JACK KILL", ms: 400 },
    { t: "JACK KILL", ms: 400 },
  ];

  useEffect(() => {
    let stepDenominator = 1;
    if (window.localStorage.getItem('stepDenominator')) {
      stepDenominator = parseInt(window.localStorage.getItem('stepDenominator'), 10);
    }

    let i = 0;

    const update = () => {
      const step = anim[i];
      setText(step.t);
      i++;

      if (i < anim.length) {
        setTimeout(update, step.ms / stepDenominator);
      } else {
        setIsTop(true); // Add the 'top' class when the animation is complete
        setTimeout(() => {
          const main = document.getElementById('main');
          if (main) {
            main.style.opacity = 1;
          }
        }, 500);
        window.localStorage.setItem('stepDenominator', '2');
      }
    };

    update();

    }, []);

  return (
      <h1
        id="intro"
        className={`title-card ${isTop ? 'top' : ''}`}
        rel="nofollow"
        tabIndex="-1"
      >
        {text}
      </h1>
  );
};

export { Intro };