angular
.module('ShoppingCart', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/listingDetail/:id',{
        templateUrl: "templates/listingDetail.html",
        controller: "HomeController"
      })
      .when('/cart', {
        templateUrl: "templates/show.html",
        controller: "CartController"
      })
      .when('/404', {
        template: "<h1>Page Not Found</h1>"
      })
      .otherwise({
        redirectTo: "/404"
      })
})
  //
  // angular
  //   .module('wangular',['ngRoute'])
  //   .config(function($routeProvider) {
  //     $routeProvider
  //       .when('/',{
  //         templateUrl: "templates/index.html",
  //         controller: "HomeController"
  //       })
  //       .when('/wanguls/new', {
  //         templateUrl: 'templates/new.html',
  //         controller: 'WangController'
  //       })
  //       .when('/wanguls/:wangulId', {
  //         templateUrl: 'templates/show.html',
  //         controller: "WangController"
  //       })
  //       .when('/wanguls/:wangulId/edit', {
  //         templateUrl: 'templates/edit.html',
  //         controller: "WangController"
  //       })
  //       .when('/404',{
  //         template: '<h1> You messed up, loser </h1>',
  //         controller: 'WangController'
  //       })
  //       .otherwise({
  //          redirectTo: '/404'
  //       })
