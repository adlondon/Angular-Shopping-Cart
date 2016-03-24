angular
  .module('ShoppingCart')
    .controller('HomeController', function($scope, $routeParams, HomeService) {
      HomeService.getActiveListings()
        .then(function(data) {
          console.log(data);
        $scope.listings = data.data.results;
      })
      if($routeParams.id) {
        console.log($routeParams.id);
        HomeService.getListing($routeParams.id)
          .then(function(data) {
            console.log("INFO",data);
            $scope.listing = data.data.results[0];
          })
      }
      $scope.addToCart = function (listing) {
        HomeService.addToCart(listing)
        }
      })
