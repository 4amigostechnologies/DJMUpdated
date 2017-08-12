angular.module('UserSchemeCards', ['ngResource'])

    .controller('UserSchemeCardsCtrl', ['$scope', '$rootScope','$resource', '$stateParams', '$http', 'loginService',
function ($scope,$rootScope, $resource, $stateParams, $http, loginService) {

    $scope.$on('$ionicView.enter', function () {
        var user = loginService.getObject();
        $scope.UserID = user.id;
        var userSchemesSubscriptions = [];
        $scope.bale_bangara = [];
        $scope.lucky_lakshmi = [];
        $scope.kanaka_dhara = [];
        $scope.golden_piggy_bank = [];

        var post1 = $resource('http://localhost/DJMServices/SchemeSubscriptions/' + user.id, { 'isarray': true });
        post1.query().$promise.then(function (data) {
            userSchemesSubscriptions = data;
            console.log(userSchemesSubscriptions);
            $scope.Total_cards = userSchemesSubscriptions.length;
            angular.forEach(userSchemesSubscriptions, function (value, key) {
                if (value.SchemeName === "Bale Bangaara") {
                    $scope.bale_bangara.push(value);
               
                }
                else if (value.SchemeName === "Lucky Lakshmi") {
                    $scope.lucky_lakshmi.push(value);
               
                }
                else if (value.SchemeName === "Gold piggy bank") {
                    $scope.golden_piggy_bank.push(value);
  
                }
                else if (value.SchemeName === "Khanaka Dhara") {
                    $scope.kanaka_dhara.push(value);

                }

            })
        });
        



        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
       // console.log($rootScope.lucky_lakshmi);
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

    })
}]);