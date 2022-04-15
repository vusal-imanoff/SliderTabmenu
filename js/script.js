let myarrimg = [
    "images/img1.jpg",
    "images/img2.png",
    "images/img3.jpg",
    "images/img4.png"
]

let img = document.querySelector('.slider img');
let counter = 0;
img.src = myarrimg[counter];

let next = document.querySelector(".next")
next.onclick = function () {
    counter++;
    if (counter > myarrimg.length - 1) {
        counter = 0;
    }
    img.src = myarrimg[counter];
}

let prev = document.querySelector(".prev")
prev.onclick = function () {
    counter--;
    if (counter == -1) {
        counter = myarrimg.length - 1;
    }
    img.src = myarrimg[counter]
}
function Play(){
    counter++;
    if (counter > myarrimg.length - 1) {
        counter = 0;
    }
    img.src = myarrimg[counter];
}
setInterval(Play,5000)


let buttons = document.querySelectorAll('.tab_links button')
let content = document.querySelectorAll('.tab_content div')

console.log(content)
for (let btn of buttons) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        let active = document.querySelector(".active");
        active.classList.remove("active")
        this.classList.add('active')

        let index = this.getAttribute('data-index')

        for (let div of content) {
            if (div.getAttribute('data-index') == index) {
                div.classList.remove('d-none')
            }
            else {
                div.classList.add('d-none')
            }
        }
    })
}