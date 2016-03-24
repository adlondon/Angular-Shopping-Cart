angular
  .module('ShoppingCart')
    .service('HomeService', function($http) {
      var key = "pbv4sjupfvnxplv0qz6dnesf";
      var cors = 'https://free-cors-server.herokuapp.com/any-request/';
      var fields = '&fields=title,url,price,description,listing_id&limit=50&includes=MainImage,User'
      var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + fields);
      var baseUrl = 'https://openapi.etsy.com/v2/listings/';
      var tiny = 'http://tiny-tiny.herokuapp.com/collections/angular-etsy'
      function getActiveListings() {
        return $http.get(cors + url);
      };
      function getListing(id){
        console.log("LISTING FIRE", id);
        return $http.get(cors + encodeURIComponent(baseUrl + id + '?api_key=' + key + fields))
      };
      function showCart() {
        return $http.get(tiny)
      };
      function addToCart(data) {
        return $http.post('http://tiny-tiny.herokuapp.com/collections/angular-etsy', data)
      };
      function deleteingListing(id) {
        return $http.delete(tiny + '/' + id)
      }

      return {
        getActiveListings: getActiveListings,
        showCart: showCart,
        addToCart: addToCart,
        deleteingListing: deleteingListing,
        getListing: getListing
      }
    })
