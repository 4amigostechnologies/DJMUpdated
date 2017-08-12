angular.module('UserSchemeDetails', ['ngResource'])
    .controller('UserSchemeDetailsCtrl', ['$scope', '$stateParams', '$state', 'userSchemesSubscriptionInfo1', 'loginService',
function ($scope, $stateParams, $state, userSchemesSubscriptionInfo1, loginService) {
    $scope.userSchemesSubscriptionData = userSchemesSubscriptionInfo1;
    var user = loginService.getObject();
    $scope.UserID = user.id;
    $scope.SchemeName = $stateParams.SchemeName;
    console.log(userSchemesSubscriptionInfo1);
    $scope.qr_img_scheme_url_head = "https://chart.googleapis.com/chart?cht=qr&chl=";
    $scope.qr_img_scheme_url_tail = "&chs=180x180&choe=UTF-8&chld=L|2";
}])