// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const about = document.querySelector('.about');
const aboutDrop = document.querySelector('.dropdown');

navToggle.addEventListener('click', function() {
    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links');
    if (aboutDrop.classList.contains('active')) {
        aboutDrop.classList.remove('active');
    }
})

// dropdown menu
about.addEventListener('click', function () {
    aboutDrop.classList.toggle('active');   
});

