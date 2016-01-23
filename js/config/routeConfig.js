angular.module('listaTelefonica').config(function($routeProvider) {
	$routeProvider.when('/contatos', {
		templateUrl: 'views/contatos.html',
		controller: 'listaTelefonicaController',
		resolve: {
			operadoras: function(operadorasAPI){
				return operadorasAPI.getOperadoras();
			},
			contatos: function(contatosAPI){
				return contatosAPI.getContatos();
			}
		}

	});

	$routeProvider.when('/novoContato', {
		templateUrl: 'views/novoContato.html',
		controller: 'novoContatoController',
		resolve: {
			operadoras: function(operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});

	//redireciona quando nao acha nenhuma pagina
	$routeProvider.otherwise({redirectTo: '/contatos'});
});
