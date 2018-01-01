(function(angular, myApp) {

  'use strict';

  myApp.config(function($stateProvider) {

    $stateProvider.state('site_info', {
      parent: 'root',
      url: '/site_info',
      views: {
        'page@root': {
          templateUrl: '/app/site_info/site_info.html',
          controller: 'site_info_ctrl',
          controllerAs: 'vm',
        },
      },
    });

  });
})(window.angular, window.myApp);