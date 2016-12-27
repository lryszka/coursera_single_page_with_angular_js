(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchList = "";
  $scope.showMessage = false;
  $scope.showWarning = false;

  $scope.giveFeedback = function () {
    var noOfItems = numberOfLunchItems($scope.lunchList);

    if (0 == noOfItems) {
      $scope.message = "Please enter data first";
      $scope.showMessage = !($scope.showWarning = true);
    } else if (4 > noOfItems) {
      $scope.message = "Enjoy!";
      $scope.showMessage = !($scope.showWarning = false);
    } else {
      $scope.message = "Too much!";
      $scope.showMessage = !($scope.showWarning = false);
    }
  };

  function numberOfLunchItems(lunchItems) {
    var items = lunchItems.split(",");
    var size = 0;

    for (var i = 0; i < items.length; i++) {
      items[i] = items[i].trim();
      if (items[i]) {
        size++;
      }
    }

    return size;
  };
}

})();
