(function(angular, myApp) {

  'use strict';

  myApp.config(function($stateProvider) {

    $stateProvider.state('skills', {
      parent: 'root',
      url: '/skills',
      views: {
        'page@root': {
          templateUrl: '/app/skills/skills.html',
          controller: 'skills_ctrl',
          controllerAs: 'vm',
        },
      },
    });

  });
})(window.angular, window.myApp);