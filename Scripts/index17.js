/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http) {
                    $http.get('index17.asmx/GetAllEmployees')
                         .then(function (response) {
                             $scope.employees = response.data;
                         });

                });