angular.module('schemejoinconfirm', ['ngResource'])
    .controller('JoinSchemeConfirmCtrl', ['$scope', '$state', '$rootScope', '$stateParams', '$http', '$ionicPopup', 'loginService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $state, $rootScope, $stateParams, $http, $ionicPopup, loginService) {
            $scope.$on('$ionicView.enter', function () {

                $scope.userid = $stateParams.userid;
                $scope.batchCode = $stateParams.batchCode;
                $scope.SchemeId = $stateParams.schemeId;
                $scope.Amount = $stateParams.Amount;
                $scope.DefinedAmount = parseInt($stateParams.DefinedAmount);
                $scope.CardNo = $stateParams.CardNo;
                $scope.payment_mode = $stateParams.PaymentMode;
                $scope.schemeName = $stateParams.SchemeName;
                $scope.Term = $stateParams.Term;
                $scope.cardName = $stateParams.CardName;
               
                console.log($scope.userid + "," + $scope.batchCode + "," + $scope.SchemeId + "," + $scope.Amount + "," + $scope.DefinedAmount + "," + $scope.CardNo + "," + $scope.payment_mode);
                var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                $scope.confirm_join = function () {
                    // console.log(card_no, card_name, amount);
                    post_url_subscription = "http://localhost/DJMServices/SchemeScubscriptions/NewUserSubscription?UserID=" + $scope.userid + "&SchemeID=" + $scope.SchemeId + "&CardNo=" + $scope.CardNo + "&CardName=" + $scope.cardName + "&DefinedAmount=" + $scope.Amount + "&BatchCode=" + $scope.batchCode;
                    post_url_payment = "http://localhost/DJMServices/UserPayments/" + $scope.userid + "/" + $scope.SchemeId + "/" + $scope.userid + "/" + $scope.Amount + "/" + $scope.DefinedAmount + "/" + $scope.CardNo + "/" + $scope.batchCode + "/" + $scope.payment_mode;
                    console.log(post_url_subscription);
                    console.log(post_url_payment);
                    //post method for subscription

                    $http.post(post_url_subscription, config).then(function (response) {
                        console.log(response.data);
                        //post method for payment

                        $http.post(post_url_payment, config).then(function (response) {
                            console.log(response.data);
                            showAlert("payment successful", true);


                        }, function (response) {
                            $scope.errMessage = response.statusText;
                            console.log(response);
                            console.log("failed in payment");

                        });
                        
                        
                    }, function (response) {
                        $scope.errMessage = response.statusText;
                        console.log(response);
                        console.log("failed in subscription");
                        
                    })


                }

                // Confirm Box

                var showAlert = function (message, status) {

                    var confirmPopup = $ionicPopup.confirm({
                        title: 'Join Scheme',
                        template: message,
                        cancelText: 'No',
                        okText: 'Yes',
                        okType: 'button-assertive button-small',
                        cancelType: 'button-assertive button-small'

                    });
                    confirmPopup.then(function (res) {
                        if (res) {
                            $state.go("tabsController.dJMJewels");
                        } else {
                            //
                        }
                    });



                };
            })
        }]);