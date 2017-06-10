angular.module('history', ['ngResource'])
    .controller('historyCtrl', ['$scope', '$http', '$stateParams', 'userHistoryInformation',
function ($scope,$http, $stateParams, $state, userHistoryInformation) {
    // $scope.userHistoryInformation = userHistoryInformation;
    $http.get("http://localhost/DJMServices/PaymentHistory/1135").then(function (response) {

        $scope.userHistoryInformation = response.data;
    });



    // console.log($scope.userHistoryInformation);
}]);