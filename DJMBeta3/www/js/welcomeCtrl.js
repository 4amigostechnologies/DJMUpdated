angular.module('welcome', ['ngResource'])
    .controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.visitor_login = function () {
        document.getElementById("menu-list-item2").style.display = "block";
        document.getElementById("menu-list-item9").style.display = "none";
    }


}]);
