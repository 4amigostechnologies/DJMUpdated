angular.module('app.services', [])

.factory('BlankFactory', [function () {
   
}])

.service('BlankService', [function(){
    
}])

.service('loginService', function () {
    var object;
    this.setObject = function (x) {
        object = x[0];
    }
    this.getObject = function () {
        console.log(object);
        return object;
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