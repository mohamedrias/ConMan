(function() {
    var AppDispatcher = require("./../dispatcher/conman.dispatcher");
    var APPCONSTANTS = require("./../constants/conman.constants");
    module.exports = {
        login: function(userName, password) {
               AppDispatcher.handleViewAction({
                    type: APPCONSTANTS.LOGIN,
                    data : {userName : userName, password: password}
               });
        },
        logout: function(userName, password) {
               AppDispatcher.handleViewAction({
                    type: APPCONSTANTS.LOGOUT,
                    data : null
               });
        },
        login: function(userName, password) {
               AppDispatcher.handleServerAction({
                    type: APPCONSTANTS.LOGIN,
                    data : {userName : userName, password: password}
               });
        },
        logout: function(userName, password) {
               AppDispatcher.handleServerAction({
                    type: APPCONSTANTS.LOGOUT,
                    data : null
               });
        }
    }
})();