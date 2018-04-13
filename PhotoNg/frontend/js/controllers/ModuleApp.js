// var ModuleApp=angular.module('projectMao', []);
var ModuleApp2=angular.module('includeExample', []);
ModuleApp2.directive('ngMouseWheelUp', function() {
    return function (scope, element, attrs) {
        element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {

            // cross-browser wheel delta
            var event = window.event || event; // old IE support
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

            if (delta > 0) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngMouseWheelUp);
                });

                // for IE
                event.returnValue = false;
                // for Chrome and Firefox
                if (event.preventDefault) {
                    event.preventDefault();
                }

            }
        });
    };
});
ModuleApp2.directive('ngMouseWheelDown', function() {
    return function(scope, element, attrs) {
        element.bind("DOMMouseScroll mousewheel onmousewheel", function(event) {

            // cross-browser wheel delta
            var event = window.event || event; // old IE support
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

            if(delta < 0) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngMouseWheelDown);
                });

                // for IE
                event.returnValue = false;
                // for Chrome and Firefox
                if(event.preventDefault)  {
                    event.preventDefault();
                }

            }
        });
    };
    });
ModuleApp2.directive('whenScrolled', function () {
    return function (scope, elm, attr) {
        var raw = elm[0];
        var takeRows = scope.takeRows;
        elm.bind('scroll', function () {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
// scope.$apply(attr.whenScrolled({ id: takeRows }));
                scope.loadMore(takeRows);
                scope.$apply();
            }
        });
    }});



