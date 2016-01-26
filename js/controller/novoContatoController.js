	angular.module('listaTelefonica').controller('novoContatoController', function($scope, contatosAPI, serialGenerator, $location, operadoras){
		$scope.operadoras = operadoras.data;

		$scope.adicionarContato = function(contato){
			contato.serial = serialGenerator.generate();
			contato.data = new Date();
			contatosAPI.createContato(contato).success(function (data){
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
				$location.path('/contatos');
			});
		};

	});
