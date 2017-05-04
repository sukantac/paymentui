myApp.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("change", function() {
            scope.transformName();

        })
    }
})

myApp.directive("insert", function() {
    return function(scope, element, attrs) {
        element.bind("keyup", function() {

            scope.cardFormat();

        })
    }
})
myApp.directive("restrictalpha", function() {
    return function(scope, element, attrs) {
        element.bind("keyup", function() {


            scope.restrictAlphabet();
        })
    }
})
 myApp.directive("restrictnumeric",function(){
   return function(scope,element,attrs){
     element.bind("keyup",function(){
           scope.restrictnumerical();
     })
   }
 })
