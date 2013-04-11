function enviarFicha()
{
	var patente_temp = $('input:text[id=patente]').val();
	if(patente_temp=='')
			{
				alert('Debe seleccionar una ficha.');
				
			}	
	
	else 
			{
				alert("Se enviar\xe1 ficha al servidor.");
				alert('No se pudo establecer conexi\xf3n con el servidor. La ficha no fue enviada.');
				
			}	
	
	  
}