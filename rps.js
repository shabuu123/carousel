let heading = document.querySelector("h1")
let image = document.querySelector("#img")
console.log(img);
let i = 0;

let carouselImg = ["images/img1 copy.jpeg", "images/img2.jpeg", "images/img3.jpeg"]

setInterval(() => {
    heading.textContent = "Carousel"
    i++
    if (i >= carouselImg.length) i = 0;
    image.setAttribute("src", carouselImg[i]);

}, 1000);