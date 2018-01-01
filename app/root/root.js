(function(angular, myApp) {

  'use strict';

  myApp.config(function($stateProvider) {

    $stateProvider.state('root', {
      abstract: true,
      templateUrl: 'app/root/root.html',
      controller: 'root_ctrl',
    });


  });
})(window.angular, window.myApp);