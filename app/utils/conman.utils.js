(function() {
    "use strict";
    
    function generateUniqueContactId(){
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx'.replace(/[x]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };
    
    module.exports = {
        generateId : generateUniqueContactId  
    }
})();