const images = ["0.jpg", "1.jpg", "2.jpg"];
const img = images[Math.floor(Math.random() * images.length)];
const imgSrc = "./img/" + img;

document.body.style.backgroundImage = "url(" + imgSrc + ")";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100vw 100vh";