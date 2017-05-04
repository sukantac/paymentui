myApp.controller('myFormCtrl', ['$scope', function($scope) {

    $scope.transformName = function() {
        $scope.name = $scope.name.toUpperCase();

        $scope.$apply();
    }

    var count = 1;
    $scope.cardFormat = function() {
        var key = event.which;
        var cardNumber = $scope.debitnumber;
        if (((cardNumber.length) !== 19) && (key >= 48 && key <= 57)) {
            if (count === 4) {
                $scope.debitnumber = $scope.debitnumber + "-";

                count = 0;
            }
            count++;
        }

        $scope.$apply();
    }

    $scope.restrictnumerical = function() {
        var username = $scope.name.replace(/[^a-zA-Z]/g, '');
        $scope.name = username;
        $scope.$apply();
    }

    $scope.restrictAlphabet = function() {
        var cno = $scope.debitnumber.replace(/[^-0-9]/g, '');
        $scope.debitnumber = cno;

        $scope.$apply();
    }


    $scope.submit = function() {
        alert("you are done");
    }

}]);
