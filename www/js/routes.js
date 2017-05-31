angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.dJMJewels', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/dJMJewels.html',
        controller: 'dJMJewelsCtrl'
      }
    }
  })

  .state('tabsController.scheme', {
    url: '/schemes/:schemeId',
    views: {
      'tab1': {
        templateUrl: 'templates/schemeDetails.html',
        controller: 'schemesCtrl',
         resolve: {
                  schemeDetails1:  function ($resource, $stateParams) {
                      var post = $resource('http://localhost/DJMServices/schemes/:schemeId',{schemeId:'@schemeId'});
                      return post.get({'schemeId':$stateParams.schemeId}).$promise; 
                    },
                  schemeParameter1: function ($resource, $stateParams) {
                  var post = $resource('http://localhost/DJMServices/schemes/:schemeId/Parameters',{schemeId:'@schemeId'});
                  return post.query({'schemeId':$stateParams.schemeId}).$promise; 
                }
        }
    }
    }
  })

  .state('tabsController.contactUs', {
    url: '/contactus',
    views: {
      'tab2': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })
.state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
})

.state('underDevelopment', {
    url: '/underDevelopment',
    templateUrl: 'templates/underDevelopment.html',
    controller: 'underDevelopmentCtrl'
})

  

  // .state('tabsController.luckyLakshmi', {
  //   url: '/luckylakshmi',
  //   views: {
  //     'tab1': {
  //       templateUrl: 'templates/luckyLakshmi.html',
  //       controller: 'luckyLakshmiCtrl'
  //     }
  //   }
  // }) 
  .state('fAQ', {
    url: '/faq',
    templateUrl: 'templates/fAQ.html',
    controller: 'fAQCtrl'
  })

  .state('tabsController.notifications', {
    url: '/notifications',
    views: {
      'tab5': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/welcome')

  

});