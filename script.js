const hour=document.getElementById("hour");
const min=document.getElementById("min");
const sec=document.getElementById("sec");

const digitalh=document.querySelector(".houring");
const digitalm=document.querySelector(".minuting");
const digitals=document.querySelector(".seconding");


function displaytime(){
  let date= new Date();

  let h=date.getHours();
  let m=date.getMinutes();
  let s=date.getSeconds();

  let hrotation=30*h+m/2;
  let mrotation=6*m;
  let srotation=6*s;

  hour.style.transform=`rotate(${hrotation}deg)`;
  min.style.transform=`rotate(${mrotation}deg)`;
  sec.style.transform=`rotate(${srotation}deg)`;

  // digital clock
  digitalh.textContent=h;
  digitalm.textContent=m;
  digitals.textContent=s;


}

setInterval(displaytime,1000);