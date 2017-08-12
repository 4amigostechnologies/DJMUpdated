angular.module('dJMJewels', ['ngResource'])

.controller('dJMJewelsCtrl', ['$scope', '$rootScope','$resource', '$stateParams', '$http', 'loginService',
    function ($scope, $rootScope, $resource, $stateParams, $http, loginService) {

    $scope.$on('$ionicView.enter', function () {
        //$scope.userSchemesSubscriptions = userSchemesSubscriptions1;
        var user = loginService.getObject();
        $scope.UserID = user.id;
        var userSchemesSubscriptions = [];
        $scope.bale_bangara = [];
        $scope.lucky_lakshmi = [];
        $scope.kanaka_dhara = [];
        $scope.golden_piggy_bank = [];
        $scope.ll_cards_no = 0;
        $scope.bb_cards_no = 0;
        $scope.gp_cards_no = 0;
        $scope.kd_cards_no = 0;
        $scope.Total_cards = 0;
        var post1 = $resource('http://localhost/DJMServices/SchemeSubscriptions/' + user.id, { 'isarray': true });
        post1.query().$promise.then(function (data) {
            userSchemesSubscriptions = data;
            console.log(userSchemesSubscriptions);
            $scope.Total_cards = userSchemesSubscriptions.length;
            angular.forEach(userSchemesSubscriptions, function (value, key) {
                if (value.SchemeName === "Bale Bangaara") {
                    $scope.bale_bangara.push(value);
                    //$scope.bb_cards_no += 1;
                }
                else if (value.SchemeName === "Lucky Lakshmi") {
                    $scope.lucky_lakshmi.push(value);
                   // $scope.ll_cards_no += 1;
                }
                else if (value.SchemeName === "Gold piggy bank") {
                    $scope.golden_piggy_bank.push(value);
                   // $scope.gp_cards_no += 1;
                }
                else if (value.SchemeName === "Khanaka Dhara") {
                    $scope.kanaka_dhara.push(value);
                    //$scope.kd_cards_no += 1;
                }

            })
            $scope.kd_cards_no = $scope.kanaka_dhara.length;
            $scope.gp_cards_no = $scope.golden_piggy_bank.length;
            $scope.ll_cards_no = $scope.lucky_lakshmi.length;
            $scope.bb_cards_no = $scope.bale_bangara.length;
        });
        console.log(userSchemesSubscriptions);
 
       
        console.log($scope.lucky_lakshmi);
        var post = $resource('http://localhost/DJMServices/schemesdata', { 'isarray': true });

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
        $scope.recent_gold_rate;

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
                        item = amount.toString() + "  on date:  " + temp.toDateString();
                        $scope.days.push(item);
                    }
                    $scope.recent_gold_rate = response.data[0].Amount;
                    console.log("success");
                });

            }
        }

        var pending_cards = $resource('http://localhost/DJMServices/SchemeScubscriptions/PaymentReminders/' + user.id, { 'isarray': true });
        pending_cards.query().$promise.then(function (data) {
            $scope.pending_cards_reminders = data;
            console.log($scope.pending_cards_reminders);

        });

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

        $scope.qr_img_scheme_url_head = "https://chart.googleapis.com/chart?cht=qr&chl=";
        $scope.qr_img_scheme_url_tail = "&chs=180x180&choe=UTF-8&chld=L|2";
    })
}]);