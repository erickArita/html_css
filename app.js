const info = document.querySelector('#info')
const seccion = document.querySelector('#escolaridad');
const experiencia = document.querySelector('#experiencia');
const ipers= document.querySelector('#pers');




ipers.addEventListener('click', function () {
    document.getElementById('info').classList.toggle('active')
});





seccion.addEventListener('mouseover', function () {
    const x = document.getElementById('escolaridad').classList.add('bounce');

});
seccion.addEventListener('mouseout', function () {
    document.getElementById('escolaridad').classList.remove('bounce');
});


experiencia.addEventListener('mouseover', function () {
    const x = document.getElementById('experiencia').classList.add('bounce');

});
experiencia.addEventListener('mouseout', function () {
    document.getElementById('experiencia').classList.remove('bounce');
});

referencias.addEventListener('mouseover', function () {
    const x = document.getElementById('referencias').classList.add('bounce');

});
referencias.addEventListener('mouseout', function () {
    document.getElementById('referencias').classList.remove('bounce');
});

