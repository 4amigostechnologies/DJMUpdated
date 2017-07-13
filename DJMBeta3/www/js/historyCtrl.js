angular.module('history', ['ngResource'])
    .controller('historyCtrl', ['$scope', '$http', '$stateParams', '$state','userHistoryInformation',
function ($scope,$http, $stateParams, $state, userHistoryInformation) {
     $scope.userHistoryInformation = userHistoryInformation;
    //$http.get("http://djmwebapi.djmjewels.com/PaymentHistory/1135").then(function (response) {

    //    $scope.userHistoryInformation1 = response.data;
    //});

    $scope.toggleGroup = function (group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
    };

     console.log($scope.userHistoryInformation);
}]);