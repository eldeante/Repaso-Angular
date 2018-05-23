//Primer parámetro es el nombre del módulo y el segundo los módulos que vayamos a importar

var app=angular.module("MyFirstApp",[]);

app.controller("MyFirstController",function($scope){
	
//Le ponemos atributos a la variable $scope	
$scope.nombre="Usuario";
$scope.direccion="Dirección";
	
	
});