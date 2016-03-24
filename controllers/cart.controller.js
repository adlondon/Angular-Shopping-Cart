angular
  .module('ShoppingCart')
    .controller('CartController', function($scope, HomeService) {
      HomeService.showCart()
        .then(function(data) {
          console.log(data);
          window.glob = data;
        $scope.listings = data.data;
      });
      $scope.deleteListing= function(listing) {
        HomeService.deleteingListing(listing._id)
          .then(function(data) {
            var objId = data.data._id
            console.log(objId);
            var objIndex = $scope.listings.findIndex(function(el) {
              return el._id === objId
            });
            console.log(objIndex);
            $scope.listings.splice(objIndex);
          });
      }
    })
