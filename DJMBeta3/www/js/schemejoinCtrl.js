angular.module('schemejoin', ['ngResource'])
    .controller('schemejoinCtrl', ['$scope', '$state', '$rootScope', '$stateParams', '$http', '$ionicPopup','loginService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $state, $rootScope, $stateParams, $http, $ionicPopup, loginService) {
            $scope.$on('$ionicView.enter', function () {
                $scope.card_details = {
                    cardNumber: "",
                    cardName: "",
                    DefinedAmount: "",
                    payment_mode:""
                }
                $scope.schemeName = $stateParams.schemename;
                $scope.batchCode = $stateParams.batchCode;
                $scope.SchemeId = $stateParams.schemeId;
                $scope.InstallmentAmount = $stateParams.InstallmentAmount;
                $scope.card_details.DefinedAmount = parseInt($stateParams.InstallmentAmount);
                $scope.Term = $stateParams.Term;
                $http.get("http://localhost/DJMServices/SchemeSubscriptions/CardNumbers/" + $scope.batchCode + "/" + $scope.SchemeId).then(function (response) {
                    console.log(response.data);
                    $scope.cardNumbers = response.data;
                }, function (response) {
                    $scope.errMessage = response.statusText;
                });
                var user = loginService.getObject();
                $scope.UserID = user.id;

                console.log($scope.UserID + "," + $scope.schemeName + "," + $scope.batchCode + "," + $scope.SchemeId + "," + $scope.InstallmentAmount + "," + $scope.Term);
                $scope.joinScheme = function () {
                    showAlert("You have selected Card Number "+$scope.card_details.cardNumber+" and Named it as "+$scope.card_details.cardName, true);
                }


                var showAlert = function (message, status) {
                    var params = {
                        userid: $scope.UserID,
                        batchCode: $scope.batchCode,
                        schemeId: $scope.SchemeId,
                        Amount: $scope.InstallmentAmount,
                        DefinedAmount: $scope.card_details.DefinedAmount,
                        CardNo: $scope.card_details.cardNumber,
                        PaymentMode: $scope.card_details.payment_mode,
                        SchemeName: $scope.schemeName,
                        Term: $scope.Term,
                        CardName: $scope.card_details.cardName
                    }

                    var confirmPopup = $ionicPopup.confirm({
                        title: 'Join Scheme',
                        template: message,
                        cancelText: 'No',
                        okText: 'Yes',
                        okType: 'button-assertive button-small',
                        cancelType:'button-assertive button-small'
                    
                    });
                    confirmPopup.then(function (res) {
                        if (res) {
                            $state.go("tabsController.joinschemeconfirm", params);
                        } else {
                            //
                        }
                    });
                };
            })
        }
    ]);