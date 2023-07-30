let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let thumbnails = document.getElementsByClassName("demo");
    let activitiesDetail = document.getElementsByClassName("block__activitiesDetail")


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        activitiesDetail[i].style.display = "none";
    }

   
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active-thumbnail");
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
    activitiesDetail[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].classList.add("active-thumbnail");
}

const thumbnails = document.querySelectorAll('.demo');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
};