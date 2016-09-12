(function () {
    'use strict';

    angular.module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.response = "";

        $scope.displayResponse = function () {
            console.log("I got called........");
            $scope.response = calculateString($scope.lunch);
        };


        function calculateString(string) {
            string.trim();
            if (string.length === 0) {
                return "Please enter data first";
            }
            var temp = new Array();
            temp = string.split(",");
            if (temp.length <= 3) {
                return "Enjoy";
            } else {
                return "Too much!";
            }
        }
    }
})();