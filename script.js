const imgs = document.querySelectorAll(".galery img");
const main_img = document.querySelector("main img");
imgs.forEach((img) => img.onclick = () => (main_img.src = img.src));