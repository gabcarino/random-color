let btn = document.querySelector('.btn-click');
let body = document.getElementById("body");

btn.onclick = () => {;
    body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) 
    + "," + Math.floor(Math.random() * 255) + ")";
}