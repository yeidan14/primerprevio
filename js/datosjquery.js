$("#boton").click(function() { 
		traerDatos2('#table72','../ejemplos.json')
	});
$("a").click(function() { 
		let cols;
		if(this.dataset.cols!=null){
			cols = this.dataset.cols.split(",");
		}
		traerDatos2('#table72',this.dataset.api,cols)
	});
function traerDatos2(destino, fuente, cols) {

	$.ajax({
		url: fuente,
		success: function(respuesta) {

			let datos = respuesta;	//JSON.parse(respuesta);

			let res = document.querySelector(`${destino} tbody`);
			res.innerHTML = '';

			let cab = document.querySelector(`${destino} thead`);
			cab.innerHTML = '';

			let item = datos [0];
			let columnas = null;

			if(cols != null) {
				columnas = cols;
			}else{
				columnas = new Array();
				for (var key in item) {
					columnas.push(key);
				}
			}



			for(let item of datos) {
				resul = '';
				for (var key in columnas) {
					resul += `<td>${item[columnas[key]]}</td>`;
				}
				res.innerHTML += `<th>
	      				${resul}
	    			</th>`;
			}
		},
		error: function() {
	        console.log("No se ha podido obtener la información");
	    }
	});
}