ModuleApp2
// .controller('HeaderController', function ($scope,$rootScope, $http) {

    .controller('HeaderController', function ($scope, $rootScope,$http) {
        $scope.templates =
            [{name: 'Header.html', url: 'Header.html'},
                {name: 'template2.html', url: 'template2.html'}];
        $scope.template = $scope.templates[0];
        $rootScope.currentPage='';
        $rootScope.cp=[];
        $rootScope.temptest=[];
        $scope.callMainController = function(dir){

            $rootScope.$emit('myEvent', 'Data to send');
            // $rootScope.$broadcast('myEvent', {someProp: 'Sending you an Object!'});

            $rootScope.cp=[];
            $http
            .post(
                '../backend/info.php',
                {dir:dir}
            )
            .then(function (response) {
                $rootScope.temptest=response.data;
                response.data.forEach(function(fj, i) {
                    $rootScope.cp.push("../images/"+dir+"/"+fj);
                });
            })

            // $rootScope.cp.$emit('myEvent', { dir: dir });
        };



        $scope.changeMain=function (e) {

            if(e===1){
                $scope.callMainController("test1");
                // $rootScope.currentPage="test1";
            }
            if(e===2){
                $scope.callMainController("test2");
                // $rootScope.currentPage="test2";
            }
            if(e===3) $rootScope.currentPage="test3";
        }


    });

