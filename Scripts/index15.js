/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employees = [
                        { name: 'Ben', gender: 'Male', city: 'London' },
                        { name: 'Sara', gender: 'Female', city: 'Chennai' },
                        { name: 'Mark', gender: 'Male', city: 'Chicago' },
                        { name: 'Pam', gender: 'Female', city: 'London' },
                        { name: 'Todd', gender: 'Male', city: 'Chennai' }
                    ];

                    var countries = [
                        {
                            name: "China",
                            cities: [
                                { name: "Beijing" },
                                { name: "Shanghai" }
                            ]
                        },
                        {
                            name: "USA",
                            cities: [
                                { name: "Los Angeles" },
                                { name: "Chicago" },
                            ]
                        }
                    ];

                    $scope.employees = employees;
                    $scope.countries = countries;

                });