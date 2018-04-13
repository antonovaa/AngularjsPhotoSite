ModuleApp.controller('TestRootScopeController', function ($scope, $rootScope, $http) {
        $scope.mod = "test TestRootScopeController";
        $rootScope.mod2 = "test $rootScope";
        $scope.data = {};
        $scope.data.visible = true;
        $scope.temp = '';
        $scope.historyNg2=[];
        $scope.FocusTest = function (e) {
            $scope.questColorClass = (e.type === "focus" ? "focus" : "unFocus");
            console.log(e.type);
        };

        $scope.loadList2 = function () {
            var dir="test1";
            $http
                .post(
                    '../backend/info.php',
                    {dir:dir}
        )
                .then(function (response) {
                    response.data.forEach(function(fj, i) {
                        $scope.historyNg2.push("../images/"+dir+"/"+fj);
                    });
                })
        };
// загрузка списка
        $scope.loadList2();
    }
);