const texte=document.querySelector('#lastname');
console.log(texte);

texte.addEventListener('focusout', () =>{
    alert("Merci de votre participation");
})