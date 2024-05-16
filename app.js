var countDownDate = new Date("June 17, 2024 00:00:00").getTime();

var time = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatting seconds with leading zero if less than 10
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    var formattedminutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedhours = hours < 10 ? "0" + hours : hours;
    var formatteddays = days < 10 ? "0" + days : days;

    document.getElementById("days").innerHTML = formatteddays;
    document.getElementById("hours").innerHTML = formattedhours;
    document.getElementById("minutes").innerHTML = formattedminutes;
    document.getElementById("seconds").innerHTML = formattedSeconds;
},1000);
