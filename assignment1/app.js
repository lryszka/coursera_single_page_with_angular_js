(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = '';
  $scope.lunchList = '';
  $scope.textBoxStyle = '';
  $scope.mgsStyle = '';
  $scope.clear = function () {
    $scope.textBoxStyle = '';
    $scope.mgsStyle = '';
    $scope.message = '';
  };

  $scope.giveFeedback = function () {
    var noOfItems = numberOfLunchItems($scope.lunchList);

    if (0 == noOfItems) {
      $scope.message = 'Please enter data first';
      $scope.textBoxStyle = 'empty';
      $scope.mgsStyle = 'empty-msg';
    } else if (4 > noOfItems) {
      $scope.message = 'Enjoy!';
      $scope.textBoxStyle = 'no-empty';
      $scope.mgsStyle = 'no-empty-msg';
    } else {
      $scope.message = 'Too much!';
      $scope.textBoxStyle = 'no-empty';
      $scope.mgsStyle = 'no-empty-msg';
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
