angular.module('listaTelefonica').controller('contatoController', function($scope, contatosAPI, $routeParams){
    var _idContato = $routeParams.id;
    $scope.contato = {};

    contatosAPI.getContato(_idContato).success(function(data){
        $scope.contato = data;
    });

});
