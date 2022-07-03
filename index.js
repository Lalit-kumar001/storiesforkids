var btn1 = document.getElementById('i-1');
var btn2 = document.getElementById('i-2');
var btn3 = document.getElementById('i-3');
var btn4 = document.getElementById('i-4');
var btn5 = document.getElementById('i-5');
var btn6 = document.getElementById('i-6');
var btn7 = document.getElementById('i-7');
var btn8 = document.getElementById('i-8');










btn1.addEventListener('click', function (event) {
    document.querySelector('.i-1').style.display = "block";
    event.stopPropagation();
})

btn2.addEventListener('click', function (event) {
   
    document.querySelector('.i-2').style.display = "block";
    event.stopPropagation();
})

btn3.addEventListener('click', function (event) {
    
    document.querySelector('.i-3').style.display = "block";
    event.stopPropagation();
})

btn4.addEventListener('click', function (event) {
    
    document.querySelector('.i-4').style.display = "block";
    event.stopPropagation();
})

btn5.addEventListener('click', function (event) {
    
    document.querySelector('.i-5').style.display = "block";
    event.stopPropagation();
})


btn6.addEventListener('click', function (event) {
    
    document.querySelector('.i-6').style.display = "block";
    event.stopPropagation();
})


btn7.addEventListener('click', function (event) {
    
    document.querySelector('.i-7').style.display = "block";
    event.stopPropagation();
})

btn8.addEventListener('click', function (event) {
  
    document.querySelector('.i-8').style.display = "block";
    event.stopPropagation();
})



document.addEventListener('click',function(){
    document.querySelector('.i-1').style.display = "none";
    document.querySelector('.i-2').style.display = "none";
    document.querySelector('.i-3').style.display = "none";
    document.querySelector('.i-4').style.display = "none";
    document.querySelector('.i-5').style.display = "none";
    document.querySelector('.i-6').style.display = "none";
    document.querySelector('.i-7').style.display = "none";
    document.querySelector('.i-8').style.display = "none";
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}
