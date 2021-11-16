
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

 }); //cierre del jQuery


/*-//----------------------------------------------------------------
Ejemplo 2
-----------------------------------------------------------------//*/


//--Le doy la posibilidad al usuario de que me cambie el color

$( document ).ready(function() {

   $('#boton-1').click( function() { //boton
  
   $("label, p").addClass('clase-p-label'); 

      alert('El contenido se modifico de color');
   });
   
});

$ ( document ).ready(function() {

    $('#boton-2').click( function() { 

       $("label , p").addClass('clase2-p-label');

       $('clase2-p-label').load("textoCuakquiera.txt");

    });

});

//-----------------------BOTON CON AJAX

$ ( document ).ready(function() {
    
    $('#enviar').click(function(){
    	
         alert("Hola");

    });
    

});