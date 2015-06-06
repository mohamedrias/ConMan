(function() {
    "use strict";
    
    var ConManUtils = require("./../utils/conman.utils");
    var data = {
        Users: [{
            "_id": ConManUtils.generateId(),
            "firstName": "Mohamed",
            "lastName": "Rias",
            "phoneNumber": "8870431316",
            "username": "mohamedrias",
            "password": "baba",
            "email": "mohamedrias@gmail.com",
            contacts: [{
                "_id": ConManUtils.generateId(),
                "firstName": "Mohamed",
                "lastName": "Rafi",
                "phoneNumber": "9789379304",
                "email": "rafibe86@gmail.com",
                "group" : "Family"
            }, {
                "_id": ConManUtils.generateId(),
                "firstName": "Mustaq",
                "lastName": "Ahamed",
                "phoneNumber": "8943539482",
                "email": "mustaqahamed@gmail.com",
                "group": "Friends"
            }]
        }]
    };

module.exports = data;
})();