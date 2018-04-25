ModuleApp

// данные будем передавать, используя $http,
// это встроенный сервис Ангуляра
    .controller('TestSendController', function ($scope,$rootScope, $http) {

        $scope.text = "";
        $scope.historyNg = [];
        $scope.moduleName2="ghjghj";
        // $rootScope.mod="test TestSendController";
        $scope.modtest=" scope in controller from "+$rootScope.mod2;
        // передача данных в PHP backend
        // методом POST-запроса.
        // в данных - 2 параметра:
        // command - команда
        // data    - текстовая строка
        $scope.save = function() {
            if ($scope.text !== "") {
                $http
                    .post('../backend/Testinf.php', {'command': 'save', 'data': $scope.text})
                    .then(function(response) {
                        // получаем от сервера текстовое сообщение
                        console.log((response['msg']));
                    });
                // новую цитату добавляем в массив цитат
                // angular автоматически обновит отображение
                // данных, связанных с шаблоном
                $scope.historyNg.push($scope.text);
                // поле ввода - очистим
                // для этого достаточно очистить, связанную переменную
                $scope.text = "";
            }
        };
        $scope.persons = [
            'Jack',
            'Jill',
            'Tom',
            'Harvey'
        ];
        // этот метод также обращается к API,
        // чтобы прочитать цитаты из базы.
        // так мы сможем инициализировать список
        // на сервер передается только код команды
        // command = loadList
        $scope.loadList = function() {
            $http
                .post('../backend/Testinf.php', {'command': 'loadList'})
                .then(function(response) {
                    $scope.historyNg = response.data;
                });
        };
        // загрузка списка
        // $scope.loadList();
    });