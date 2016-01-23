angular.module('listaTelefonica').filter('name', function(){
	return function (input){
		var listaDeNomes = input.split(' ');
		//console.log(listaDeNomes);
		
		var listaDeNomesFormatada = listaDeNomes.map(function (nome){
			if(/da|de/.test(nome)) return nome;
			return nome.charAt(0).toUpperCase() + nome.substr(1).toLowerCase();
		});

		//console.log(listaDeNomesFormatada);

		return listaDeNomesFormatada.join(" ");
			
	};
});