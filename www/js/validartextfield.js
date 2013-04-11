function ValidaSoloNumeros() {
 if ((event.keyCode < 48) || (event.keyCode > 57)) 
 event.returnValue = false;
}

function ValidaSoloTexto() {
 if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
  event.returnValue = false;
}

function ValidaNumTexto() {
 if ((event.keyCode < 48) || (event.keyCode > 57)) 
 if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
 event.returnValue = false;
}