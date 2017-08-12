angular.module('contactUs', ['ngResource'])
    .controller('contactUsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}]);

//angular.module('ionic_starter', ['ionic']);

//angular.module('ionic_starter').run(function($rootScope, $ionicPlatform) {
//  return $ionicPlatform.ready(function() {
//    if (window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if (window.StatusBar) {
//      return StatusBar.styleDefault();
//    }
//  });
//});

//angular.module('ionic_starter').config(function($stateProvider, $urlRouterProvider, $httpProvider) {
//  $stateProvider.state('app', {
//    url: '/app',
//    abstract: true,
//    templateUrl: 'menu.html'
//  });
//  $stateProvider.state('app.home', {
//    url: '/home',
//    views: {
//      'menu_content': {
//        templateUrl: 'home.html'
//      }
//    }
//  });
//  return $urlRouterProvider.otherwise('/app/home');
//});

//angular.module('ionic_starter').directive('popupMenu', function($rootScope) {
//  return {
//    restrict: 'E',
//    templateUrl: 'popup-menu.html',
//    replace: true,
//    transclude: true,
//    scope: {
//      model: '=ngModel'
//    },
//    link: function($scope, $el, $attrs) {
//      $scope.menu_is_open = false;
//      return $scope.togglePopupMenu = function() {
//        return $scope.menu_is_open = !$scope.menu_is_open;
//      };
//    }
//  };
//});