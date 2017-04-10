/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http, $log) {
                    var successCallBack = function (response) {
                        $scope.employees = response.data;
                        $log.info(response);
                    }

                    var errorCallBack = function (reason) {
                        $scope.error = reason.data;
                        $log.info(reason);
                    }

                    $http({
                        method: "GET",
                        url: 'index18.asmx/GetAllEmployees'
                        //url: 'index18.asmx/GetAllEmployee'
                    })
                    /*.then(function (response) {
                        $scope.employees = response.data;
                        $log.info(response);
                    }, function (reason) {
                        $scope.error = reason.data;
                        $log.info(reason);
                    });*/
                    .then(successCallBack, errorCallBack);

                });