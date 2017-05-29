angular.module('app.controllers', ['ngResource'])
  
.controller('dJMJewelsCtrl', ['$scope','$resource', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $resource,$stateParams,$http) {

    var post = $resource('http://localhost/DJMServices/schemes', { 'isarray': true });

post.query().$promise.then(function(data) {
   // success
   $scope.schemes = data;
   console.log(data);
}, function(errResponse) {
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
   
.controller('schemesCtrl', ['$scope', '$stateParams','schemeDetails1','schemeParameter1',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, schemeDetails1,schemeParameter1) {

 $scope.scheme = schemeDetails1; 
 $scope.schemeParameters = schemeParameter1;

}])
.controller('contactUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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

.controller('myCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $window,$state, $stateParams, $location) {
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
                        $state.go('tabsController.dJMJewels');
                       // $window.location.href = 'dJMJewels.html';
                        //Response.Redirect "dJMJewels.html" ;
                    }
                    else {
                        $scope.errmessage = "Invalid credentials";
                    }

                },
            function (response) {
                $scope.errmessage = response.statusText;

            });
           
        }
})
