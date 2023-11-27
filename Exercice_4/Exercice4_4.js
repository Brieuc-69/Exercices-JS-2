const button=document.querySelector('button')
const texte=document.querySelector('#lastname')
const texte2=document.querySelector('#firstname')
const texte3=document.querySelector('#city')
console.log(button);

button.addEventListener('click', () =>{
    texte.value = '';
    texte2.value = '';
    texte3.value = '';

})


