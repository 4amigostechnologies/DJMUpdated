angular.module('schemes', ['ngResource'])
.controller('schemesCtrl', ['$scope', '$stateParams', '$sce','schemeParameter1',
function ($scope, $stateParams,$sce,schemeParameter1) {

    //$scope.scheme = schemeDetails1;
    $scope.schemeParameters = schemeParameter1[0];
    $scope.schemeParameters.Description_html = $sce.trustAsHtml($scope.schemeParameters.Description);
    console.log($scope.schemeParameters);

}]);