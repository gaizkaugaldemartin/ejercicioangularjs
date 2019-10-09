(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('localizar', ['$scope','$http', function($scope,$http){
  
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
  $scope.localizar = function(){
    console.trace('click boton localizar');



}]);





})();
