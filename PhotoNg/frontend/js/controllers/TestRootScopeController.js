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

            // var request = $http({
            //     method: "post",
            //     url: "../backend/info.php",
            //     data: {
            //         email: "test3",
            //         pass: "test33"
            //     },
            //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            // });
            //
            // /* Check whether the HTTP Request is successful or not. */
            // request.success(function (data) {
            //     document.getElementById("message").textContent = "You have login successfully with email "+data;
            //     $scope.historyNg2 = "../images/test1/"+data.data;
            // });

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
            //     .error(function (response) {
            //    console.log(response);
            // });


        };
// загрузка списка
        $scope.loadList2();
    }
);