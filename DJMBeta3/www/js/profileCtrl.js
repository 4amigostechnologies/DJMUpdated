angular.module('profile', ['ngResource'])
    .controller('profileCtrl', ['$scope','$rootScope', '$stateParams', 'loginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$rootScope, $stateParams, loginService) {
    var user = loginService.getObject();
    
    $scope.city = user.City + " , " + user.State;
    $scope.email = user.EmailId;
    $scope.phoneNo = user.PhoneNo;
    $scope.UserID = user.id;
    $scope.qr_url = "https://chart.googleapis.com/chart?cht=qr&chl="+user.PhoneNo+"&chs=180x180&choe=UTF-8&chld=L|2";

}]);