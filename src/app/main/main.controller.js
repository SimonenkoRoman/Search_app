(function() {
  'use strict';

  angular
    .module('searchApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $stateParams) {
    var vm = this;

    vm.search = [];     /*массив пользователей*/

    vm.submit=function() {          
$http.get("https://api.github.com/search/users?q=" + vm.search + "+repos:%3E42+followers:%3E1000&per_page=5")
        .then(function(response) { vm.users = response.data.items })
        .catch(function(error) {console.log(error)})
     }
vm.onchange = function() {
  
console.log(vm.search);

}
  
  }
})();
