function logout()
{
	confirmar=confirm("\xBFDesea guardar los datos antes de salir?"); 
	if (confirmar) 
	{
	// si pulsamos en aceptar
	alert('Datos guardados correctamente');
	location.href="index.html";
	}
	else 
	{
	// si pulsamos en cancelar
	
	}
	  
}