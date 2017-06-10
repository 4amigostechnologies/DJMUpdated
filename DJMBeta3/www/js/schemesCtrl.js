angular.module('schemes', ['ngResource'])
.controller('schemesCtrl', ['$scope', '$stateParams', 'schemeDetails1', 'schemeParameter1',
function ($scope, $stateParams, schemeDetails1, schemeParameter1) {

    $scope.scheme = schemeDetails1;
    $scope.schemeParameters = schemeParameter1;



}]);