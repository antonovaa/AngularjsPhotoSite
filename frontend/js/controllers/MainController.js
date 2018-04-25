// ModuleApp2.directive("scroll", function ($window,$rootScope) {
//     return function (scope, element, attrs) {
//
//         angular.element($window).bind("scroll", function () {
//             if (this.pageYOffset >= 100) {
//                 $rootScope.showHeader=false;
//                 console.log("jkljkl");
//             } else {
//                 $rootScope.showHeader=true;
//             }
//             // scope.$apply();
//         });
//     };
// });
ModuleApp2.controller('MainController', function ($scope,$rootScope,$http) {

// ----------- todo work it
    //Listeners
    $rootScope.$on('myEvent', function(event, args){
       console.log(args);
    });

    $scope.logFunc=function ($rootScope) {
        console.log("testtesttest"+$rootScope);
    }
});
