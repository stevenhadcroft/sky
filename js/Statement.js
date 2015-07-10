var broker = new BD.JsonBroker();

angular.module('skyApp', [])
.controller('statementController', ['$scope', function($scope) {
    broker.loadJSON(function(){
        $scope.$apply(function () {
            $scope.statement = broker.getStatementData();
            $scope.statementTotal = broker.getStatementData().total;
            $scope.callCharges = broker.getCallChargesData().list;
            $scope.callChargesTotal = broker.getCallChargesData().total;
            $scope.subscriptions = broker.getSubscriptionsData().list;
            $scope.subscriptionsTotal = broker.getSubscriptionsData().total;
            $scope.skyStore = broker.getSkyStoreData().list;
            $scope.skyStoreTotal = broker.getSkyStoreData().total;
        });
    })
}]);

