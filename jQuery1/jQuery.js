
console.log("status active"); //Estado del archivo


/**
append() - Inserta contenido al final de los elementos seleccionados
prepend() - Inserta contenido al comienzo de los elementos seleccionados
after() - Inserta contenido después de los elementos seleccionados
before() - Inserta contenido antes de los elementos seleccionados
*/

$( document ).ready(function() { //Etiqueta por defecto

    $('.h1-titulo').prepend("Estoy agregando contenido al principio <br>"); 
   
    $('.h1-titulo').append(" <br> Estoy agregando el contenido al final");
     
    $('.h1-titulo').after(" <br> Estoy agregando contenido de bajo de la clase seleccionada");
    
    $('.h1-titulo').before(" <br> Estoy agregando contenido por arriba de la clase seleccionada"); 
     
    //--Eliminando con jQuery  

    $('.h1-titulo').remove();

 }) //cierre del jQuery