let header = document.querySelector('#intro');
let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "T", ms: 100 },
    { t: "TE_", ms: 100 },
    { t: "TES", ms: 100 },
    { t: "TEST_", ms: 100 },
    { t: "TESTI", ms: 100 },
    { t: "TESTIN_", ms: 100 },
    { t: "TESTING", ms: 500 },
    { t: "TESTIN_", ms: 100 },
    { t: "TESTI", ms: 100 },
    { t: "TES_", ms: 100 },
    { t: "TE", ms: 100 },
    { t: "T_", ms: 100 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "J", ms: 100 },
    { t: "JA_", ms: 100 },
    { t: "JAC", ms: 100 },
    { t: "JACK_", ms: 100 },
    { t: "JACK ", ms: 100 },
    { t: "JACK K_", ms: 100 },
    { t: "JACK KI", ms: 100 },
    { t: "JACK KIL_", ms: 100 },
    { t: "JACK KILL_", ms: 100 },
    { t: "JACK KILL ", ms: 200 },
    { t: "JACK KILL", ms: 200 },
    { t: "JACK KILL ", ms: 200 },
    { t: "JACK KILL", ms: 200 },
    { t: "JACK KILL", ms: 200 },
    { t: "JACK KILL", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();