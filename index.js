const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', function () {
    //img.classList.add('show')
    //img.classList.remove('show')
    img.classList.toggle('show')
    // alert('cacest change')
})
//********************************************************** 
const mouseEvent = document.querySelector('.mouseEvent');
const horizintal = document.querySelector('.horizintal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', function (e) {
    horizintal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
    mouseEvent.style.left = e.x / window.innerHeight * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }
})