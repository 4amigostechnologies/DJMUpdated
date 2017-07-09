angular.module('UserSchemeDetails', ['ngResource'])
    .controller('UserSchemeDetailsCtrl', ['$scope', '$stateParams', '$state', 'userSchemesSubscriptionInfo1', 'loginService',
function ($scope, $stateParams, $state, userSchemesSubscriptionInfo1, loginService) {
    $scope.userSchemesSubscriptionData = userSchemesSubscriptionInfo1;
    var user = loginService.getObject();
    $scope.UserID = user.id;
    //$scope.UserID = 1135;
    console.log(userSchemesSubscriptionInfo1);
}])