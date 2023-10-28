const elemento = document.getElementById('meuElemento');
const elemento1 = document.getElementById('meuElemento1');
const elemento2= document.getElementById('meuElemento2');
const elemento3= document.getElementById('meuElemento3');
const elemento4= document.getElementById('meuElemento4');
const imagem = document.getElementById('oculto');
const imagem1 = document.getElementById('oculto1');
const imagem2 = document.getElementById('oculto2');
const imagem3 = document.getElementById('oculto3');
const imagem4 = document.getElementById('oculto4');

elemento.addEventListener('mouseover', function() {
  imagem.style.display = 'block';
});

elemento.addEventListener('mouseout', function() {
  imagem.style.display = 'none';
});



elemento1.addEventListener('mouseover', function() {
    imagem1.style.display = 'block';
  });
  
  elemento1.addEventListener('mouseout', function() {
    imagem1.style.display = 'none';
  });





  elemento2.addEventListener('mouseover', function() {
    imagem2.style.display = 'block';
  });
  
  elemento2.addEventListener('mouseout', function() {
    imagem2.style.display = 'none';
  });





  elemento3.addEventListener('mouseover', function() {
    imagem3.style.display = 'block';
  });
  
  elemento3.addEventListener('mouseout', function() {
    imagem3.style.display = 'none';
  });




  elemento4.addEventListener('mouseover', function() {
    imagem4.style.display = 'block';
  });
  
  elemento4.addEventListener('mouseout', function() {
    imagem4.style.display = 'none';
  });



