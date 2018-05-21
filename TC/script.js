$('#button').click(() => {
	const data = $('#test').val();
	$.ajax({
		url: 'http://127.0.0.1:3000/products',
		type: 'GET',
		data: {name: data},
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
			'Access-Control-Allow-Headers': 'Content-Typen'
		},
		dataType: "json",

		success : function(data){
			if (data.error)
				$('#result').html('No product found');
			else{
				$('#result').html(data.name + '  quantity : ' + data.quantity);
			}
		},

		error : function(resultat, statut, erreur){
			console.log(erreur);
		}
	});
})