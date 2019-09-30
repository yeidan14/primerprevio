if(localStorage.getItem("nombre")!=null){
	window.location="showdown.html";
}

document.querySelector('#enviar').addEventListener('click', function() { 
		const xhttp = new XMLHttpRequest();

		xhttp.send();
		xhttp.onreadystatechange = function(){
			
				user = document.querySelector("#username").value;
				pass = document.querySelector("#password").value;
				console.log(user);

				if(user == "admin") {
					if(pass == "1234") {
						console.log(true);
						localStorage.setItem("nombre",user);
						localStorage.setItem("usuario",pass);
						window.location="showdown.html";
					}
				}
			

			document.querySelector("#alerta").innerHTML = "Usuario no encontrado";
			//document.querySelector("#alerta").display = block;
				
			
		}
	
	});