angular.module('app.controllers', ['ngResource'])

.controller('dJMJewelsCtrl', ['$scope', '$resource', '$stateParams', '$http', 'loginService',
function ($scope, $resource, $stateParams, $http, loginService ) {

    //$scope.userSchemesSubscriptions = userSchemesSubscriptions1;


    var post1 = $resource('http://localhost/DJMServices/SchemeSubscriptions' ,{ 'isarray': true });
    post1.query().$promise.then(function (data) {
        $scope.userSchemesSubscriptions = data;
        console.log(data);
    });

    var user = loginService.getObject();
    $scope.UserID = user.id;
    var post = $resource('http://localhost/DJMServices/schemes', { 'isarray': true });

    post.query().$promise.then(function (data) {
        // success
        $scope.schemes = data;
        console.log(data);
    }, function (errResponse) {
        // fail
    });
    $scope.groups = [];
    //var date = new Date();
    $scope.days = [];


    for (var i = 0; i < 1; i++) {
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j = 0; j < 1; j++) {

            $http.get("http://localhost/DJMServices/jewelrates/sort").then(function (response) {

                console.log(response.data[0].Amount);
                for (var i = 0; i < 5; i++) {
                    var item = "";
                    var amount = 0;
                    var date = "";
                    amount = response.data[i].Amount;
                    date = response.data[i].CreatedDate;
                    var temp = new Date(date);
                    item = "Rs." + amount.toString() + "  on date:  " + temp.toDateString();
                    $scope.days.push(item);
                }
                console.log("success");
            });

        }
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
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

}])

.controller('schemesCtrl', ['$scope', '$stateParams', 'schemeDetails1','schemeParameter1',
function ($scope, $stateParams, schemeDetails1, schemeParameter1) {

    $scope.scheme = schemeDetails1;
    $scope.schemeParameters = schemeParameter1;

    

}])

.controller('UserSchemeDetailsCtrl', ['$scope', '$stateParams', '$state', 'userSchemesSubscriptionInfo1', 'loginService',
function ($scope, $stateParams, $state, userSchemesSubscriptionInfo1, loginService) {
    $scope.userSchemesSubscriptionData = userSchemesSubscriptionInfo1;
    var user = loginService.getObject();
    $scope.UserID = 1135;
    console.log(userSchemesSubscriptionInfo1);
}])


.controller('contactUsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('historyCtrl', ['$scope','$http' ,'$stateParams', 'userHistoryInformation',
function ($scope,$http, $stateParams, $state, userHistoryInformation) {
   // $scope.userHistoryInformation = userHistoryInformation;
    $http.get("http://localhost/DJMServices/PaymentHistory/1135").then(function (response) {

        $scope.userHistoryInformation = response.data;
    });



   // console.log($scope.userHistoryInformation);
}])




.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.visitor_login = function () {
        document.getElementById("menu-list-item2").style.display = "block";
        document.getElementById("menu-list-item9").style.display = "none";
    }


}])
.controller('fAQCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('notificationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('underDevelopmentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('myCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $window, $state, $stateParams, $location , loginService) {
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
})

.controller('profileCtrl', ['$scope', '$stateParams', 'loginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, loginService) {
    var user = loginService.getObject();
    $scope.profileName = user.FirstName + user.LastName;
    $scope.city = user.City + " , " + user.State;
    $scope.email = user.EmailId;
    $scope.phoneNo = user.PhoneNo;

}])

.controller('registerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])