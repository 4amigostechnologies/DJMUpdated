angular.module('schemes', ['ngResource'])
.controller('schemesCtrl', ['$scope', '$stateParams', '$sce', 'schemeParameter1', 'loginService',
function ($scope, $stateParams, $sce, schemeParameter1, loginService) {
    $scope.is_logged = loginService.get_status();
    $scope.schemeParameters = schemeParameter1;
    $scope.schemeName = schemeParameter1[0].Name;
    $scope.schemeicon = schemeParameter1[0].icon;
    $scope.Description_html = $sce.trustAsHtml(schemeParameter1[0].Description);
    console.log(schemeParameter1);

}]);