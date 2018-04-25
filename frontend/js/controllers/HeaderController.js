ModuleApp2.controller('HeaderController', function ($scope, $rootScope, $http) {
    $scope.templates =
        [{name: 'Header.html', url: 'Header.html'},
            {name: 'template2.html', url: 'template2.html'}];
    $scope.template = $scope.templates[0];
    $rootScope.currentPage = '';
    $rootScope.cp = [];
    $rootScope.temptest = [];
    $scope.butttons = [];

    // $scope.hiddenClass=$rootScope.headerHiddenClass;


    //send to listeners
    $scope.callMainController = function (dir) {
        $rootScope.$emit('myEvent', 'Data to send');
        $rootScope.cp = [];
        $http
            .post(
                'backend/controller/info.php',
                {dir: dir}
            )
            .then(function (response) {
                $rootScope.temptest = response.data;
                response.data.forEach(function (fj, i) {
                    $rootScope.cp.push("images/" + dir + "/" + fj);
                });
            })
    };


    $scope.setAllButtons = function (dir) {
        $http
            .post(
                'backend/controller/FoldersButtons.php'
            )
            .then(function (response) {
                $rootScope.temptest = response.data;
                response.data.forEach(function (fj, i) {
                    $scope.butttons.push(fj);
                });
            })
    };


    $scope.changeMain = function (e) {

        if (e === 0) {
            $scope.callMainController("test1");
            // $rootScope.currentPage="test1";
        }
        if (e === 1) {
            $scope.callMainController("test2");
            // $rootScope.currentPage="test2";
        }
        if (e === 2) $rootScope.currentPage = "test3";
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
    };
    $scope.setAllButtons();

});

