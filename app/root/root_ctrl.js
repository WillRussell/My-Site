(function(angular, myApp) {

  'use strict';

  myApp.controller('root_ctrl', ['$scope', '$interval', '$mdSidenav', function($scope, $interval, $mdSidenav) {

    /*Navbar clock*/
    $interval(function() {
      $scope.time = moment().format('dddd, h:mm A');
    }, 1000);


    /*Sidenav flyout toggle */
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };


    $scope.sidenav_links = [{
      name: 'About Me',
      state: 'about_me',
      icon: 'account_circle',
    }, {
      name: 'Skills',
      state: 'skills',
      icon: 'build',
    }, {
      name: 'Site Info',
      state: 'site_info',
      icon: 'description',
    }];

  }]);
})(window.angular, window.myApp);