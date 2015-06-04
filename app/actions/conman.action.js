(function() {
    var AppDispatcher = require("./../dispatcher/conman.dispatcher");
    var APPCONSTANTS = require("./../constants/conman.constants");
    module.exports = {
        addContact: function(contact) {
               AppDispatcher.handleViewAction({
                    type: APPCONSTANTS.ADD_CONTACT,
                    data : contact
               });
        },
        removeContact: function(contactId) {
               AppDispatcher.handleViewAction({
                    type: APPCONSTANTS.DELETE_CONTACT,
                    data : contactId
               });
        },
        editContact: function(contact) {
               AppDispatcher.handleServerAction({
                    type: APPCONSTANTS.UPDATE_CONTACT,
                    data : contact
               });
        },
        viewContact: function(contactId) {
               AppDispatcher.handleServerAction({
                    type: APPCONSTANTS.VIEW_CONTACT,
                    data : contactId
               });
        }
    }
})();