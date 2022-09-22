setInterval(() => {
    let hh = document.getElementById("hh");
    const mm = document.getElementById("mm");
    const ss = document.getElementById("ss");

    let sec_dot = document.querySelector(".sec_dot");
    const min_dot = document.querySelector(".min_dot");
    const hr_dot = document.querySelector(".hr_dot");
    
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    hh.style.strokeDashoffset = 510 - (510 * h) / 24;

    mm.style.strokeDashoffset = 630 - (630 * m ) / 60;

    ss.style.strokeDashoffset = 760 - (760 * s) / 60;

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
}, 1000)
