const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

let myDate;
let myTime;
let date;
setInterval(() => {
  myDate = new Date();
  myTime =
    myDate.getHours() +
    " : " +
    myDate.getMinutes() +
    " : " +
    myDate.getSeconds();
  date = myDate.toLocaleDateString();
  document.getElementById("date").innerHTML = date;

  document.getElementById("time").innerHTML = myTime;
}, 1000);
