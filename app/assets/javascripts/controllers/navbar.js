(function(angular, app) {
  "use strict";

  app.controller("NavbarController",["$scope", "userService", function($scope, userService) {

    $scope.hideForm = true;
    $scope.isUserLoggedIn = userService.isUserLoggedIn();
    $scope.username = userService.getUserName();

    $scope.loginClicked = function(){
      $scope.hideForm = !$scope.hideForm;
    };
  }]);
})(angular, app);
