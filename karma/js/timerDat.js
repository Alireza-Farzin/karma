let demo = document.querySelectorAll('.clockinner');
let countDownDate = new Date("Jan 5, 2028 15:37:25").getTime();



var  x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById('days').innerHTML = days;

      document.getElementById('hours').innerHTML = hours;

     document.getElementById('mins').innerHTML = minutes;

     document.getElementById('secs').innerHTML = seconds;

});