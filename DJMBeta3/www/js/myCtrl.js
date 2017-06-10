angular.module('myCtrl', ['ngResource'])
    .controller('myCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $window, $state, $stateParams, $location, loginService) {
    var app = angular.module('myapp', []);
    //app.controller('myCtrl', function ($scope, $http, $window) {
    console.log("hi");

    $scope.ButtonClick = function () {
        $http.get("http://localhost/DJMServices/UserProfiles/GetUserProfileOfAUser?strUserName=" + $scope.mobile + "&strPassword=" + $scope.password).then(
            function (respons) {
                var temp = respons.data;
                console.log(temp);
                console.log(temp.length);
                if (temp.length == 1) {
                    $scope.errmessage = "";
                    $scope.mobile = "";
                    $scope.password = "";
                    document.getElementById("menu-list-item2").style.display = "none";
                    document.getElementById("menu-list-item9").style.display = "block";
                    loginService.setObject(temp);
                    $state.go('tabsController.dJMJewels');
                }
                else {
                    $scope.errmessage = "Invalid credentials";
                    $scope.password = "";
                }

            },
        function (response) {
            $scope.errmessage = response.statusText;

        });

    }
});