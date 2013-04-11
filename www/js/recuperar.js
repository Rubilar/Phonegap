function recuperar(mail)
{
	var ExpRegular = /(\w+)(\.?)(\w*)(\@{1})(\w+)(\.?)(\w*)(\.{1})(\w{2,3})/;

	  if (ExpRegular.test(mail))
	  {
		   alert("La contrase\xf1a fue enviada a  " + mail + ".");
		   location.href="index.html";
	  } else 
			{
				alert("La direcci\xf3n de email es incorrecta.");
			}
}



