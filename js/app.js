/**
* Modulo do App
*/
var app = angular.module('meuApp', ['ngAnimate', 'ngTouch', 'ngRoute']);

/**
 * Configuração de rotas
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

      //Rota Principal
    .when("/", {templateUrl: "partials/inicio.html", controller: "PageCtrl"})

      //Paginas
	.when("/sugestoes", {templateUrl: "partials/sugestoes.html", controller: "PageCtrl"})

    .when("/altoajuda", {templateUrl: "partials/altoajuda.html", controller:"PageCtrl"})
	.when("/ensaios", {templateUrl: "partials/ensaios.html", controller:"PageCtrl"})
	.when("/ficcao_fantastica", {templateUrl: "partials/ficcao_fantastica.html", controller: "PageCtrl"})
	.when("/ficcao_suspense", {templateUrl: "partials/ficcao_suspense.html", controller: "PageCtrl"})
	.when("/filosofia", {templateUrl: "partials/filosofia.html", controller: "PageCtrl"})
	.when("/geografia_e_historia", {templateUrl: "partials/geografia_e_historia.html", controller: "PageCtrl"})
	.when("/infanto_juvenil", {templateUrl: "partials/infanto_juvenil.html", controller: "PageCtrl"})
	.when("/psicologia", {templateUrl: "partials/psicologia.html", controller: "PageCtrl"})
	.when("/romance", {templateUrl: "partials/romance.html", controller: "PageCtrl"})
	.when("/teoria_e_critica", {templateUrl: "partials/teoria_e_critica.html", controller: "PageCtrl"})
	.when("/terror_e_suspense", {templateUrl: "partials/terror_e_suspense.html", controller: "PageCtrl"})
	.when("/turismo", {templateUrl: "partials/turismo.html", controller: "PageCtrl"})

	//Caso contrario volta pro inicio
  .otherwise({redirectTo:'/'});
}]);


/**
 * Controladores
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
