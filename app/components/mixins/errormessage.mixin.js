(function() {
    "use strict";
    var React = require("react");
    
    var ErrorMessageHandlerMixin = {
     
        addError: function (error) {
            var errorDOM = this.refs[error.field + "-error"].getDOMNode();
            errorDOM.textContent = error.error;
            errorDOM.parentNode.classList.add("has-error");
        },
        removeError: function (ref) {
            var errorDOM = this.refs[ref + "-error"].getDOMNode();
            errorDOM.textContent = "";
            errorDOM.parentNode.classList.remove("has-error");
        }
    }
    
    module.exports = ErrorMessageHandlerMixin;
})();