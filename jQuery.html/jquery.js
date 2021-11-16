
//Estado dl archivo

console.log("estado ok");

//ACLARACION: Para trabajar con Jquery siempre arrancar con el signo $

$( document ).ready(function() { //Etiqueta por defecto

   /* 
    //Seleccionando a travez de una ATRIBUTO (NOMBRE DE LA ETIQUETA)
    $('h1').html('Estoy modificando el valor 1, con Jquery - desde el ATRIBUTO');

    //Seleccionando desde una CLASE

    $('.h2-valor2').html('Estoy modificando el valor 2 con Jquey - desde la CLASE');
    
    //Seleccionando desde un ID

    $('#h3-valor3').html('Estoy modificando el valor 2 con Jquey - desde el ID'); */

    //--------------------------------Otra forma

     document.querySelector('.h2-valor2').innerHTML = ' QUE ONDA ';


 }//Jquery