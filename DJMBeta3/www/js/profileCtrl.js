angular.module('profile', ['ngResource'])
    .controller('profileCtrl', ['$scope', '$stateParams', 'loginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, loginService) {
    var user = loginService.getObject();
    $scope.profileName = user.FirstName + user.LastName;
    $scope.city = user.City + " , " + user.State;
    $scope.email = user.EmailId;
    $scope.phoneNo = user.PhoneNo;

}]);