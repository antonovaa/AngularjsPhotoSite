ModuleApp2.controller('HeaderController', function ($scope, $rootScope, $http) {
    $scope.templates =
        [{name: 'Header.html', url: 'Header.html'},
            {name: 'template2.html', url: 'template2.html'}];
    $scope.template = $scope.templates[0];
    $rootScope.currentPage = '';
    $rootScope.cp = [];
    $rootScope.temptest = [];

    // $scope.hiddenClass=$rootScope.headerHiddenClass;


    //send to listeners
    $scope.callMainController = function (dir) {
        $rootScope.$emit('myEvent', 'Data to send');
        $rootScope.cp = [];
        $http
            .post(
                'backend/info.php',
                {dir: dir}
            )
            .then(function (response) {
                $rootScope.temptest = response.data;
                response.data.forEach(function (fj, i) {
                    $rootScope.cp.push("images/" + dir + "/" + fj);
                });
            })
    };


    $scope.changeMain = function (e) {

        if (e === 1) {
            $scope.callMainController("test1");
            // $rootScope.currentPage="test1";
        }
        if (e === 2) {
            $scope.callMainController("test2");
            // $rootScope.currentPage="test2";
        }
        if (e === 3) $rootScope.currentPage = "test3";
    }

    $scope.visibleModal=function (e) {
        if(e===1) {
            angular.element(document.querySelector('#exampleModal')).addClass("modal-open");
            angular.element(document.querySelector('#exampleModal')).removeClass("modal");
            console.log('modal-open');
        }else {
            angular.element(document.querySelector('#exampleModal')).addClass("modal");
            angular.element(document.querySelector('#exampleModal')).removeClass("modal-open");

        }
    }


});

