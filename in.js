var Changer = document.getElementById("Changer");
var one_q = document.getElementById("one_q");
var one_a = document.getElementById("one_a");
var cross_1 = document.getElementById("cross");
var j = document.getElementById("j");
var ic = document.getElementById("ic");
var messages = document.getElementById("messages");
var five = document.getElementById("five");
var close_1 = document.getElementById("close");
var about = document.getElementById("about");
//var logs = document.getElementById("hoverr");
var haves_1 = document.getElementById("container_1");
var haves = document.getElementById('hover');
var a = document.getElementById('container');
haves.addEventListener('mouseover', ()=>{
a.style.display = "block";

haves_1.style.display = "none";
});

a.addEventListener('mouseleave', ()=>{
a.style.display = "none";

});



j.addEventListener('mouseenter', ()=>{
a.style.display = "none";


});

//       logs.addEventListener('mouseover', ()=>{
// haves_1.style.display = "block";
// a.style.display = "none";

//       });

haves_1.addEventListener('mouseleave', ()=>{
haves_1.style.display = "none";
});

close_1.addEventListener('click', ()=>{
about.style.display = "none";
});

five.addEventListener('click', ()=>{
about.style.display = "block"
});

ic.addEventListener('mouseover', ()=>{

ic.innerHTML = "Haider Ali Sehar";


});
ic.addEventListener('mouseleave', ()=>{
ic.innerHTML = "!";



});

close_1.addEventListener('click', ()=>{
about.style.display = "none";
Changer.innerHTML = "Creativity Developer";
});

five.addEventListener('click', ()=>{
about.style.display = "block"
Changer.innerHTML = "About";
});

cross_1.addEventListener('click', ()=>{
a.style.display = "none";


});

one_q.addEventListener('click',()=>{
window.open('Quotes.html', '_parent');
});

one_a.addEventListener('click',()=>{
window.open('Articles.html', '_parent');
});



