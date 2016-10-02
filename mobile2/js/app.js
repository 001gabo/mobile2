$(document).ready(function(){
 	
    $("#accesorios").on('click', function(){
		$('#resultado-accesorios').empty();
		$.getJSON("http://pymesv.com/cliente02w/API/categorias/?categoria=1")
		.done(function(datos_del_ws){
			$.each(datos_del_ws ,function(indice, valor){
				$("#resultado-accesorios").append("<div id='nombre'><ul><img src=' " + valor.url + " ' height='250' width='250' </ul></div>");
				$("#resultado-accesorios").append("<div id='imagen'><ul>" + valor.nombre + "</ul></div>");
                $("#resultado-accesorios").append("<div id='precio'><ul> $" + valor.precio + "</ul></div><br>");
			})
		});
	})
    ; 
    
    
	$("#compus").on('click', function(){
		$('#resultado-compus').empty();
		$.getJSON("http://pymesv.com/cliente02w/API/categorias/?categoria=2")
		.done(function(datos_del_ws){
			$.each(datos_del_ws ,function(indice, valor){
                $("#resultado-compus").append("<div id='nombre'><ul><img src=' " + valor.url + " ' height='250' width='250' </ul></div>");
				$("#resultado-compus").append("<div id='imagen'><ul>" + valor.nombre + "</ul></div>");
                $("#resultado-compus").append("<div id='precio'><ul> $" + valor.precio + "</ul></div><br>");
                
			})
		});
	});

    $("#memorias").on('click', function(){
		$('#resultado-usb').empty();
		$.getJSON("http://pymesv.com/cliente02w/API/categorias/?categoria=3")
		.done(function(datos_del_ws){
			$.each(datos_del_ws ,function(indice, valor){
				$("#resultado-usb").append("<div id='nombre'><ul><img src=' " + valor.url + " ' height='250' width='250' </ul></div>");
				$("#resultado-usb").append("<div id='imagen'><ul>" + valor.nombre + "</ul></div>");
                $("#resultado-usb").append("<div id='precio'><ul> $" + valor.precio + "</ul></div><br>");
			})
		});
	}); 
    
    $("#programas").on('click', function(){
		$('#resultado-programas').empty();
		$.getJSON("http://pymesv.com/cliente02w/API/categorias/?categoria=4")
		.done(function(datos_del_ws){
			$.each(datos_del_ws ,function(indice, valor){
				$("#resultado-programas").append("<div id='nombre'><ul><img src=' " + valor.url + " ' height='250' width='250' </ul></div>");
				$("#resultado-programas").append("<div id='imagen'><ul>" + valor.nombre + "</ul></div>");
                $("#resultado-programas").append("<div id='precio'><ul> $" + valor.precio + "</ul></div><br>");
			})
		});
	}); 

});