	angular.module('listaTelefonica').controller('listaTelefonicaController', function($scope, contatos, operadoras, serialGenerator){

		$scope.app = "Lista Telefonica";

		$scope.contatos = contatos.data;

		$scope.operadoras = operadoras.data;

		var carregarOperadoras = function(){
			operadorasAPI.getOperadoras().success(function (data){
				$scope.operadoras = data;
			});
		};


		$scope.adicionarContato = function(contato){
			contato.serial = serialGenerator.generate();
			contato.data = new Date();
			contatosAPI.createContato(contato).success(function (data){
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
				carregarContatos();
			});
		};

		$scope.apagarContatos = function(contatos){
			$scope.contatos = contatos.filter(function(contato) {
				if (!contato.selecionado) {
					return contato;
				};
			});
		}

		$scope.isContatoSelecionado = function(contatos){
			return contatos.some(function (contato){
				return contato.selecionado;
			});
		}

		$scope.selecionado = 'selecionado';
		$scope.negrito = 'negrito';


		$scope.ordernarPor = function(campo){
			$scope.criterioDeOrdenacao = campo;
			$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
		};

	});
