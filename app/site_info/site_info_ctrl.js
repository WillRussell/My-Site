(function(angular, myApp) {

  'use strict';

  myApp.controller('site_info_ctrl', [function() {

    var vm = this; // view model 

    vm.tools = [
      { name: 'AngularJS', link: 'https://docs.angularjs.org' },
      { name: 'Amazon S3 + Cloudfront Distribution', link: 'https://aws.amazon.com/s3' },
      { name: 'UI-Router', link: 'https://ui-router.github.io' },
      { name: 'Angular Material', link: 'https://material.angularjs.org' },
      { name: 'Material Icons', link: 'https://material.io/icons' },
      { name: 'Underscore.js', link: 'http://underscorejs.org' },
      { name: 'Moment.js', link: 'https://momentjs.com' },
    ];

  }]);
})(window.angular, window.myApp);