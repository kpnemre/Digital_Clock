
// document.querySelector(".datetime").addEventListener('click', updateClock);



function updateClock (){
    let now = new Date();
    // console.log(now);
    let dname = now.getDay();
    let mo = now. getMonth();
    let dnum = now.getDate();
    let yr = now.getFullYear();
    let hou = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let pe = "AM";

    if (hou==0){
        hou==12;
    }
    else if(hou>12){
        hou= hou-12;
        pe ="PM";
    }

    let months = ["January", "February","March","April", "May","June","July","Agust","September","November","December"];
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let ids =["dayname","month","daynum","year","hour","minutes","seconds","period"];
    let values =[week[dname], months[mo], dnum, yr, hou,min,sec,pe];

    for (i=0; i<ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue=values[i];
    }


    // console.log(dname, mo, dnum, yr, hou, min, sec, pe);




}

function initClock(){
updateClock();
window.setInterval("updateClock()",1)
// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
// F.E: setInterval(function(){ alert("Hello"); }, 3000); 3000ms

}