(function(angular, myApp) {

  'use strict';

  myApp.config(function($stateProvider) {

    $stateProvider.state('about_me', {
      parent: 'root',
      url: '/',
      views: {
        'page@root': {
          templateUrl: 'app/about_me/about_me.html',
          controller: 'about_me_ctrl',
          controllerAs: 'vm',
        },
      },
    });

  });
})(window.angular, window.myApp);