const span = document.querySelectorAll('span')
const arrow = document.querySelectorAll('.arrow')
span.forEach(spanDown => {
    spanDown.addEventListener('click', e => {
        spanDown.nextElementSibling.classList.toggle('active');

        if(spanDown.nextElementSibling.classList.contains('active')){
            spanDown.style.fontWeight = 'bold';
        }else{
            spanDown.style.fontWeight = ''
        }
        if(!spanDown.children[0].classList.contains('rotateImg')){
            spanDown.children[0].classList.add('rotateImg')
        }else{
            spanDown.children[0].classList.remove('rotateImg')
        }
    });
});