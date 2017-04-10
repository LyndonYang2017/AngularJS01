﻿/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var technologies = [
                        { name: "C#", likes: 0, dislikes: 0 },
                        { name: "ASP.NET", likes: 0, dislikes: 0 },
                        { name: "SQL Server", likes: 0, dislikes: 0 },
                        { name: "AngularJS", likes: 0, dislikes: 0 },
                    ];

                    $scope.technologies = technologies;

                    $scope.incrementLinkes = function (technology) {
                        technology.likes++;
                    }

                    $scope.incrementDislinkes = function (technology) {
                        technology.dislikes++;
                    }
                });