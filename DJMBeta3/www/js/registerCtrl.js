angular.module('register', ['ngResource'])
.controller('registerCtrl', ['$scope','$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$http,$stateParams) {
    $scope.user = {};
    $scope.register = function () {

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('http://djmwebapi.djmjewels.com/UserProfiles', $scope.user, config)
        .success(function (data, status, headers, config) {
            $scope.errMessage = "register success";
            console.log(data);
        })
        .error(function (data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        });
    
        
    }



}]);