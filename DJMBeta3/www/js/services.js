angular.module('app.services', [])

.factory('BlankFactory', [function () {
   
}])

.service('BlankService', [function(){
    
}])

.service('loginService', function () {
    var object;
    var is_logged=false;
    this.setObject = function (x, authenticated) {
        if (authenticated) {
            is_logged = true;
        }
        object = x[0];
    }
    this.getObject = function () {
        console.log(object);
        return object;
    }
    this.get_status = function () {
        return is_logged;
    }
})

.service('JoinService', function ($http) {
    //this.getCardNumbers = function () {
    //    $http.get("http://localhost/DJMServices/SchemeSubscriptions/CardNumbers").then(function (response) {
    //        console.log(response.data[0]);
    //        return response.data;
    //    }, function (response) {
    //        return response.statusText;
    //    });
    //}


});