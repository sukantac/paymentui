myApp.controller('myFormCtrl', ['$scope', function($scope) {

    $scope.transformName = function() {
        $scope.name = $scope.name.toUpperCase();
    }

    var count = 1;
    $scope.cardFormat = function() {
        var cardNumber = $scope.debitnumber;
        if ((cardNumber.length) !== 19) {
            if (count === 4) {
                $scope.debitnumber = $scope.debitnumber + "-";

                count = 0;
            }
            count++;
        }

    }
    $scope.submit = function() {
        alert("you are done");
    }

}]);
