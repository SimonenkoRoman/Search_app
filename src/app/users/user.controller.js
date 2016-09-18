(function() { 
  'use strict';

  angular
    .module('searchApp')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($http, $stateParams) {
    var us = this;

    $http.get("https://api.github.com/users/" + $stateParams.username)
        .then(function(response) { us.user = response.data })
        .catch(function(error) {console.log(error)})

    $http.get("https://api.github.com/users/" + $stateParams.username + "/repos")
        .then(function(response) { us.repos = response.data })
        .catch(function(error) {console.log(error)})
  
console.log($stateParams.username);
 
}
})();
