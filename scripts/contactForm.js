var subButton=document.querySelectorAll('#submit');
var it1=document.getElementById('formItem-1');
var it2=document.getElementById('formItem-2');
var it3=document.getElementById('formItem-3');
var it4=document.getElementById('formItem-4');

subButton[0].addEventListener("click", function(e) {
  if(it1.value==="" || it2.value==="" || it3.value==="" || it4.value===""){
    e.preventDefault();
    alert('Please fill the required fields!');
  }else{
    alert('Submitted! We will get back to you soon.');
  }
});

subButton[1].addEventListener("click", function(e) {
  if(it1.value==="" || it2.value==="" || it3.value==="" || it4.value===""){
    e.preventDefault();
    alert('Please fill the required fields!');
  }else{
    alert('Submitted! We will get back to you soon.');
  }
});
