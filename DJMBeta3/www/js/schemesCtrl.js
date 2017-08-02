angular.module('schemes', ['ngResource'])
.controller('schemesCtrl', ['$scope', '$stateParams', '$sce','schemeParameter1',
function ($scope, $stateParams,$sce,schemeParameter1) {
    $scope.schemeParameters = schemeParameter1;
    $scope.schemeName = schemeParameter1[0].Name;
    $scope.schemeicon = schemeParameter1[0].icon;
    $scope.Description_html = $sce.trustAsHtml(schemeParameter1[0].Description);
    console.log(schemeParameter1);

}]);