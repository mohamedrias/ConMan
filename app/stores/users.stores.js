(function () {
    "use strict";

    var AppDispatcher = require("./../dispatcher/conman.dispatcher"),
        data = require("./data"),
        EventEmitter = require('events').EventEmitter,
        _ = require('underscore'),
        CHANGE_EVENT = 'change',
        LOGGEDOUT_EVENT = "unauthorized",
        LOCALSTORAGE_KEY = "_currentUser",
        
        ConManUtils = require("./../utils/conman.utils"),
        
        
        /**
        *   Internal variable for managing the stubbed users
        **/
        //TODO: Remove the stubbed value and fetch it from server
        _users = data.Users,
        _currentUser = null,
        
        
        APPCONSTANTS = require("./../constants/conman.constants"),
        
        /**
         * Method to update the LocalStorage
         */
        updateLocalStorage = function() {
            if(typeof window !== "undefined" && typeof localStorage !== "undefined") {
                localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(_currentUser));
            }
        },
        
        /**
         * Helper Method to get the localStorage data
         * @returns {Object} localStorage currentUser data
         */
        getLocalStorageData = function() {
            if(typeof window !== "undefined" && typeof localStorage !== "undefined") {
                if(localStorage.getItem(LOCALSTORAGE_KEY))
                    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            }
        },
        
        /**
         * Removes localStorage data
         */
        removeLocalStorageData = function() {
            if(typeof window !== "undefined" && typeof localStorage !== "undefined") {
                localStorage.removeItem(LOCALSTORAGE_KEY);
            }
        };
        
    
    
    

    /**
    *   Super charging our User Store with EventEmitter eventing functionality
    *   & adding more app specific helper methods
    */
    var UsersStore = _.extend({}, EventEmitter.prototype, {

        /**
         * Emit the change event
         */
        emitChange: function () {
            this.emit(CHANGE_EVENT);
        },

        /**
         * Helper method to attach listeners to a particular store
         * @param {function}   callback function to execute on change of event
         */
        addChangeListener: function (callback) {
            this.on(CHANGE_EVENT, callback);
        },
        
        /**
         * Used to remove the listeners attached to change event
         * @param {function} callback which callback function to remove
         */
        removeChangeListener: function (callback) {
            this.removeListener(CHANGE_EVENT, callback);
        },

        /**Check if the user credentials are valid/not
         * @param   {Object}   uobject containing username & password
         * @returns {Function} trigger the change event 
         */
        login: function (user) {
            //TODO: Make service call to check the user credentials & return
            for (var i = 0, len = _users.length; i < len; i++) {
                if (_users[i].username === user.userName && _users[i].password === user.password) {
                    _currentUser = _users[i];
                    updateLocalStorage();
                    break;
                }
            }
            return this.emitChange();
        },
        
        /**
         * Logout function to clear the currentUser object
         * @returns {Function} trigger the change event to cascade to attached listeners
         */
        logout: function () {
            _currentUser = null;
            removeLocalStorageData();
            return this.emitChange();
        },

        /**
         * Get the current logged in user profile
         * @returns {Object} Current logged in user object  
         */
        getUserProfile: function () {
            return _currentUser;
        },

        /**
         * Used to check if the user is logged in / not
         * @returns {Boolean} logged in status
         */
        isLoggedIn: function () {
            if (_currentUser)
                return true;
            else
                return false;
        },
        /**
         * Adding new contact
         * @param   {Object} contact Contact details
         * @returns {event}  Event emitter
         */
        addContact: function(contact) {
            contact._id = ConManUtils.generateId();
            _currentUser.contacts.push(contact);   
            updateLocalStorage();
            return this.emitChange();
        },

        /**
         * Used to initialize the localstorage data
         */
        init: function() {
            if(typeof window !== "undefined" && typeof localStorage !== "undefined") {
                _currentUser = getLocalStorageData();
            }   
        }


    });
    
    
   
    
    UsersStore.dispatchToken = AppDispatcher.register(function (payload) {
        var action = payload.action;
        switch (payload.source) {
            //TODO: Write server side login functionality
            case "SERVER_ACTION":
                switch (action.type) {
                    case APPCONSTANTS.LOGIN:
                        UsersStore.login(action.data);
                        break;
                    case APPCONSTANTS.LOGOUT:
                        UsersStore.logout();
                        break;
                    default:
                }
                break;
            //TODO: Client side Authentication Functionality
            case "VIEW_ACTION":
                 switch (action.type) {
                    case APPCONSTANTS.LOGIN:
                        UsersStore.login(action.data);
                        break;
                    case APPCONSTANTS.LOGOUT:
                        UsersStore.logout();
                        break;
                    case APPCONSTANTS.ADD_CONTACT:
                         UsersStore.addContact(action.data);
                    default:
                     
                }
            break;

        }

    });

    module.exports = UsersStore;
})();
