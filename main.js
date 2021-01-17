'use strict';
//オリンピック開催日 2021年7月23日
const goal = new Date(2021,6,23);
function countdown(){
    const now = new Date();
    //restに残り時間をミリ秒単位で格納する
    const rest = goal.getTime() - now.getTime();

    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hrs = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 /24); 

    const count = [days,hrs,min,sec];
    
    document.getElementById('day').textContent = count[0];
    document.getElementById('hour').textContent = count[1];
    document.getElementById('min').textContent = String(count[2]).padStart(2,'0');
    document.getElementById('sec').textContent = String(count[3]).padStart(2,'0');
    refresh();
}

function refresh(){
    setTimeout(countdown,1000);
}
countdown();