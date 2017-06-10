angular.module('app.services', [])

.factory('BlankFactory', [function(){

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
});