<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

window.onresize = function(){
    location.reload();
};

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const w = window.innerWidth;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (w < 1200) {
        slides[slideIndex - 1].style.display = "block";
    } 
    else if (w < 1800) {
        for (i = slideIndex - 1; i < slideIndex + 1; i++) {
            if (i < slides.length) {
                slides[i].style.display = "block";
            }
        }
    } 
    else {
        for (i = slideIndex - 1; i < slideIndex + 2; i++) {
            if (i < slides.length) {
                slides[i].style.display = "block";
            }
        }
    }    
}
</script>
