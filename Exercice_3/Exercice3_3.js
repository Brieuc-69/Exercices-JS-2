const texte=document.querySelector('#lastname');
console.log(texte);
texte.addEventListener('keydown', (event) =>{
    const message = event.key;
    alert(message)
    
})