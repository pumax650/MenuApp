app.controller('maSemaineController', function ($scope) {

    $scope.text = 'Ma semaine de menus';

    // Wait for Cordova to load
    document.addEventListener('deviceready', onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
        console.log('device ready ');

        window.sqlitePlugin.echoTest(successCallback, errorCallback);


        window.sqlitePlugin.openDatabase({ name: "ex1.db" }, function (db) {
            db.transaction(function (tx) {
                // ...
                console.log('Open database ok: ');
            }, function (err) {
                console.log('Open database ERROR: ' + JSON.stringify(err));
            });
        });

    }

    function successCallback()
    {
        console.log('test ok: ');
    }

    function errorCallback() {
        console.log('test nok: ');
    }
});