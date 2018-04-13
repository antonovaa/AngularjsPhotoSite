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
ModuleApp2.directive('onScrollToBottom', function ($document) {
    //This function will fire an event when the container/document is scrolled to the bottom of the page
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var doc = angular.element($document)[0].body;

            $document.bind("scroll", function () {

                //console.log('in scroll');
                //console.log("scrollTop + offsetHeight:" + (doc.scrollTop + doc.offsetHeight));
                //console.log("scrollHeight: " + doc.scrollHeight);

                if (doc.scrollTop + doc.offsetHeight >= doc.scrollHeight) {
                    //run the event that was passed through
                    scope.$apply(attrs.onScrollToBottom);
                    console.log("test");

                }
            });
        }
    };
});
ModuleApp2.controller('MainController', function ($scope,$rootScope,$http) {

    // $scope.test = function (a) {
    //     console.log(a);
    // };

// ----------- todo work it
    $rootScope.$on('myEvent', function(event, args){
       console.log(args);
    });

    $scope.logFunc=function ($rootScope) {
        console.log("testtesttest"+$rootScope);
    }

});
