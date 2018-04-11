questApp.factory('dataService', function($http, $q){
    return{
        getData: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'question.json'}).
            then (function success(response) {
                    deferred.resolve(response.data.question);
                }, function error(response) {
                    deferred.reject(response.status);
                }
            );

            return deferred.promise;
        }
    }
})