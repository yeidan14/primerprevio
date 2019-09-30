function traerDatos() {

	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'datostable.json');

	xhttp.send("#table72");
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			let datos = JSON.parse(this.responseText);

			let res = document.querySelector('#res');
			res.innerHTML = '';

			for(let item of datos) {
				res.innerHTML += `<th>
				<td> ${item.id}/> </td>
				<td>${item.carta}</td>
				<td>${item.cantidad}></td>
	    			</th>`;
			}
		}
	}
}