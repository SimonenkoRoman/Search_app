(function() { 
  'use strict';

  angular
    .module('searchApp')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($http, $stateParams) {
    var us = this;

    us.load=function() { 
$http.get("https://api.github.com/search/users/" + $stateParams.username)
        .then(function(response) { us.user = response.data.items })
        .catch(function(error) {console.log(error)})

$http.get("https://api.github.com/search/users/" + $stateParams.username + "/repos")
        .then(function(response) { us.user = response.data.items })
        .catch(function(error) {console.log(error)})
     }

// .get($stateParams.username)         
}


// us.load();
})();
