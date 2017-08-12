angular.module('register', ['ngResource'])
.controller('registerCtrl', ['$scope', '$state','$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$state ,$http, $stateParams, $ionicPopup) {
    $scope.$on('$ionicView.enter', function () {
        $scope.user = {
            id: 9999,
            EmailId: "",
            Password: "",
            Status: true,
            ActivationStatus: true,
            UserType: "Customer",
            FirstName: "",
            LastName: "",
            Gender: "",
            Address: "",
            City: "",
            PostalCode: "",
            State: "",
            Country: "",
            DOB: "",
            PhoneNo: "",
            AlternativeNo: "",
            MaritalStatus: "",
            SpouceName: "",
            SpouceDOB: "",
            MarriageDate: "",
            PaybackPoints: "0",
            ProfileImageURL: null,
            CreatedDate: "",
            Nominee: "",
            LastLogin: ""
        };

        $scope.validatePassword = function () {
            console.log("entered");
            if ($scope.user.Password !== $scope.user.cnfPassword) {
                $scope.password_error = "paswword and confirm password do not match";
            }
            else if ($scope.user.Password == "" || $scope.user.Password === null) {
                $scope.password_error = "please enter valid password";
            }
            else {
                $scope.password_error = "";
            }
        }

        $scope.maritialstatus = function () {
            $scope.user.SpouceName = null;
            $scope.user.SpouceDOB = null;
            $scope.user.MarriageDate = null;

        }


        $scope.register = function () {
            var date = new Date();
            $scope.user.CreatedDate = date.toISOString();
            $scope.user.LastLogin = date.toISOString();
            $scope.user.SpouceDOB = date.toISOString();
            $scope.user.MarriageDate = date.toISOString();
            var config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            var obj = angular.toJson($scope.user);
            console.log(obj);

            $http.post('http://localhost/DJMServices/UserProfiles', obj, config)
                .success(function (data, status, headers, config) {
                    showAlert("'<p>User Registrstion is Succesful. <br> Please tap OK to Login</p>'", true);
                    console.log(data);
                    $state.go('login');
                })
                .error(function (data, status, header, config) {
                    showAlert("Registration Failed", false);
                    console.log(data);
                    console.log(status);
                    console.log(header);
                    console.log(config);
                });


        }
        var showAlert = function (message, status) {

            var alertPopup = $ionicPopup.alert({
                title: 'New User Registration',
                template: message,
                buttons: [
                    {
                        text: '<b>OK</b>',
                        type: 'button-assertive',
                        onTap: function (e) {

                            if (status) {
                                //don't allow the user to close unless he enters model...
                                $state.go("login");
                            } else {
                                //return $scope.data.model;
                            }
                        }
                    }
                ]
            });

            // alertPopup.then(function (res) {
            // Custom functionality....

            // });
        };

    });
}]);