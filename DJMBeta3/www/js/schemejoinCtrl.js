angular.module('schemejoin', ['ngResource'])
    .controller('schemejoinCtrl', ['$scope', '$rootScope', '$stateParams', '$http', 'loginService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $http, loginService) {
    $scope.card_details = {
        cardNumber:"",
        cardName:"",
        DefinedAmount:""
    }

    $http.get("http://localhost/DJMServices/SchemeSubscriptions/CardNumbers").then(function (response) {
        console.log(response.data);
        $scope.cardNumbers = response.data;
    }, function (response) {
        $scope.errMessage = response.statusText;
    });
    var user = loginService.getObject();
  
    $scope.UserID = user.id;
    $scope.schemeName = $stateParams.schemename;
    $scope.batchCode = $stateParams.batchCode;
    $scope.SchemeId = $stateParams.schemeId;
    console.log($scope.UserID + "," + $scope.schemeName + "," + $scope.batchCode + "," + $scope.SchemeId);
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    $scope.joinScheme = function () {
       // console.log(card_no, card_name, amount);
        post_url = "http://localhost/DJMServices/SchemeScubscriptions/NewUserSubscription?UserID=" + $scope.UserID + "&SchemeID=" + $scope.SchemeId + "&CardNo=" + $scope.card_details.cardNumber + "&CardName=" + $scope.card_details.cardName + "&DefinedAmount=" + $scope.card_details.DefinedAmount + "&BatchCode=" + $scope.batchCode;
        setTimeout(function () {
            $http.post(post_url, config).then(function (response) {
                console.log(response.data);
                $scope.errMessage = "success";
            }, function (response) {
                $scope.errMessage = response.statusText;
                console.log(response);
            })

        }, 50000);
        
       

    }
}]);