angular.module('login', ['ngResource'])
   .controller('loginCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $rootScope, $http, $window, $state, $stateParams, $location, loginService) {
          var app = angular.module('myapp', []);
          //app.controller('myCtrl', function ($scope, $http, $window) {
          console.log("hi");
          //var api_url = BlankFactory.getAPIUrl();
          $scope.ButtonClick = function () {
              $http.get("http://192.168.3.11/DJMServices/UserProfiles/GetUserProfileOfAUser?strUserName=" + $scope.mobile + "&strPassword=" + $scope.password).then(
                 function (respons) {
                     var temp = respons.data;
                     console.log(temp);
                     console.log(temp.length);
                     if (temp.length == 1) {
                         $scope.errmessage = "";
                         $scope.mobile = "";
                         $scope.password = "";
                         console.log(temp[0].FirstName + temp[0].LastName);
                         $rootScope.profileName = temp[0].FirstName + temp[0].LastName;
                         document.getElementById("menu-list-item2").style.display = "none";
                         document.getElementById("menu-list-item9").style.display = "block";
                         loginService.setObject(temp,true);

                         $state.go('tabsController.dJMJewels');
                     } else {
                         $scope.errmessage = "Invalid credentials";
                         $scope.password = "";
                     }

                 },
                 function (response) {
                     $scope.errmessage = response.statusText;

                 });

          }
      });