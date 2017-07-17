angular.module('dJMJewels', ['ngResource'])

.controller('dJMJewelsCtrl', ['$scope', '$resource', '$stateParams', '$http', 'loginService',
function ($scope, $resource, $stateParams, $http, loginService) {

    //$scope.userSchemesSubscriptions = userSchemesSubscriptions1;


    var post1 = $resource('http://djmwebapi.djmjewels.com/SchemeSubscriptions', { 'isarray': true });
    post1.query().$promise.then(function (data) {
        $scope.userSchemesSubscriptions = data;
        console.log(data);
    });

    var user = loginService.getObject();
    $scope.UserID = user.id;
    var post = $resource('http://djmwebapi.djmjewels.com/schemes', { 'isarray': true });

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

            $http.get("http://djmwebapi.djmjewels.com/jewelrates/sort").then(function (response) {

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

    $scope.qr_img_scheme_url_head = "https://chart.googleapis.com/chart?cht=qr&chl=";
    $scope.qr_img_scheme_url_tail = "&chs=180x180&choe=UTF-8&chld=L|2";

}]);