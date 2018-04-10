(function(angular, myApp) {

  'use strict';

  myApp.controller('skills_ctrl', [function() {

    var vm = this; // view model 

    vm.skills = [{
      type: 'Front-end',
      collection: [
        'Javascript (ES5)',
        'HTML5 / CSS / SCSS',
        'AngularJS',
        'Angular Material',
        'D3.js',
        'jQuery',
        'Lodash.js / Underscore.js',
        'Gulp.js / Grunt.js',
        'Highcharts.js / Highstock.js',
        'Mapbox.js / Mapbox GL'
      ]
    }, {
      type: 'Back-end',
      collection: [
        'Node.js (ES6)',
        'Express.js',
        'AWS Lamda',
        'Mongo DB'
      ]
    }, {
      type: 'Dev-Ops',
      collection: [
        'Amazon Web Services',
        'Wercker',
        'Git / Github',
        'Atlassian / JIRA'
      ]
    }];


  }]);
})(window.angular, window.myApp);