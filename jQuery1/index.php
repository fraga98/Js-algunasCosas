<!DOCTYPE html>
<html>
<head>
	<title>Jquery uso de las funciones</title>
  
    <!--Importo el link del Query --> 
    <script 
		  src="https://code.jquery.com/jquery-3.6.0.min.js"
		  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
		  crossorigin="anonymous">
    </script>
     
    <!-- Llamo a mi archivo -->
    <script src="jQuery.js"></script> 

	<style type="text/css"> 

	    h1{font-size: 20px; color: blue;} 
	    .clase-p-label{color: red; font-size: 20px;}
        .clase2-p-label{ color: black; font-size: 20px;};
	    }

    </style>

</head>
<body>  

  <h1 class="h1-titulo">TEXTO DEL MEDIO</h1>
     
     <br><br>

  <h2 class="h2-titulo">Otras funciones</h2>


  <!-- Etiquetas sin clases (se las voy a estar agregando desde el jQuery)-->

   <label>Info macht</label>

   <p>Info mi parrafo</p> 

     <br><br>

   <button id="boton-1">Cambiar de color al contenido</button>  
   <button id="boton-2">Volver al contenido anterior</button>
   
   
 <!--AJAX--->

   <hr>
   
 <form method="POST"> 

    <input type="text" id="numero" name="numero_">
    <label for="numero">Numero</label>

      <br><br>
    
    <input type="submit" id="enviar" name="enviar_">  

 </form>



</body>
</html>