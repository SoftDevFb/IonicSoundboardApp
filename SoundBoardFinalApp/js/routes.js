angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabs.animalSounds', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/animalSounds.html',
        controller: 'animalSoundsCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/page1',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('tabs.peopleSounds', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/peopleSounds.html',
        controller: 'peopleSoundsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});