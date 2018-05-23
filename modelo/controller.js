//Primer parámetro es el nombre del módulo y el segundo los módulos que vayamos a importar

var app=angular.module("MyFirstApp",[]);

//Creamos un controlador, podemos añadir tantos controladores como queramos al módulo MyFirstApp

app.controller("MyFirstController",function($scope){
	
//Le ponemos atributos a la variable $scope	
$scope.nombre="Usuario";
$scope.direccion="Dirección";
$scope.nuevoComentario={};
$scope.comentarios=[
	
	{
		comentario:"hola",
		username:"Pedro"
	},
	
	{
		comentario:"todo bien",
		username:"Paco"
	}
];

//Podemos agregar funciones
$scope.agregarComentario=function()
	{		
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario={};		
	};
		
});