//Primer parámetro es el nombre del módulo y el segundo los módulos que vayamos a importar

/*var app=angular.module("MyFirstApp",[]);

//Creamos un controlador, podemos añadir tantos controladores como queramos al módulo MyFirstApp

app.controller("MyFirstController",function($scope,$http){
		
$scope.posts=[];
			
//La variable http sirve para visualizar una consulta que hagamos a una página web mediante Ajax
$http.get("https://jsonplaceholder.typicode.com/posts")
	.success(function(data){
		console.log(data);
		$scope.posts=data;
	})
	
	.error(function(err){
		
	});		
});*/

angular.module("MyFirstApp", []) .controller("FirstController", function($scope, $http){ $scope.posts = []; $http.get("http://jsonplaceholder.typicode.com/posts") .then(function(response){ console.log(response.data); $scope.posts = response.data; },function(err){ console.log(err); }); });