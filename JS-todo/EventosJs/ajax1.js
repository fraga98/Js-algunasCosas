console.log('activo'); //para saber que este arhivo esta funcionando


/*El querySelector puede seeccionar cualquier cosa de nuestro html
  
  document.querySelector('#boton') ---- #cuando hace referencia al id

  document.querySelector('.boton') ---- .cuando hace referencia a una clase

*/

document.querySelector('#boton').addEventListener('click', function(){
    
    alert("Hola santiago");


})