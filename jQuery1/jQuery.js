
console.log("status active"); //Estado del archivo
   
/**
append() - Inserta contenido al final de los elementos seleccionados
prepend() - Inserta contenido al comienzo de los elementos seleccionados
after() - Inserta contenido después de los elementos seleccionados
before() - Inserta contenido antes de los elementos seleccionados
*/

$( document ).ready(function() { //Etiqueta por defecto
     
    //--AGREGANDO CONTENIDO con jQuery 

    $('.h1-titulo').prepend("Estoy agregando contenido al principio <br>"); 
   
    $('.h1-titulo').append(" <br> Estoy agregando el contenido al final");
     
    $('.h1-titulo').after(" <br> Estoy agregando contenido de bajo de la clase seleccionada");
    
    $('.h1-titulo').before(" <br> Estoy agregando contenido por arriba de la clase seleccionada"); 
     
    //--ELIMINANDO con jQuery  

       // $('.h1-titulo').remove(); 

    //--Elimino con jQuery

       // $('.h1-titulo').empty();


    //Otras funciones de la biclioteca Jquery

     $('h1 h2').addClass('clase-general-ambos');
     
     $('.clase-general-ambos').css("color:red;");

 }) //cierre del jQuery