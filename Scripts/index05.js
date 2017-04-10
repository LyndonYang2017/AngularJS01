/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    $scope.message = "Hello Angular!";

                    var employee = {
                        firstName: "Ben",
                        lastName: "Hastings",
                        gender: "Male"
                    };
                    $scope.employee = employee;
                });