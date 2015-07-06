angular.module("Symanto.Message", []);

var message = angular.module("Symanto.Message");

message.service("MessageService", function() {

    var success = function(message) {
        $.notify({
            message: message,
            icon: "glyphicon glyphicon-ok-sign"
        }, {
            type: 'success'
        });

        console.log("SUCCESS: " + message);
    };

    var warning = function(message) {
        $.notify({
            message: message,
            icon: "glyphicon glyphicon-alert"
        }, {
            type: 'warning'
        });

        console.log("WARNING: " + message);
    };

    var error = function(message) {
        $.notify({
            message:  message,
            icon: "glyphicon glyphicon-remove-sign"
        }, {
            type: 'danger'
        });

        console.log("ERROR: " + message);
    };

    return {
        "success": success,
        "warning": warning,
        "error": error
    };
});