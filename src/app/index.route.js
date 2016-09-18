(function() {
  'use strict';

  angular
    .module('searchApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('user', {
        url: '/user/:username',
        templateUrl: 'app/users/user.html',
        controller: 'UserController',
        controllerAs: 'user'
    //     resolve: {
    //       messages: function (InboxService) {
    //       return InboxService.getMessages();
    //   }
    // }
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
