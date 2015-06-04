(function () {
    "use strict";

    var REGEXRULES = {
        NUMERIC: /^[0-9]+$/,
        INTEGER: /^\-?[0-9]+$/,
        DECIMAL: /^\-?[0-9]*\.?[0-9]+$/,
        EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        ALPHA: /^[a-z]+$/i,
        PHONE: /^(?:\+)?(?:0)?(?:91)?[789]\d{9}$/gi
    };

    var validator = {
        isEmpty: function (ref) {
            var value = ref.getDOMNode().value && ref.getDOMNode().value.trim();
            return !!value;
        },
        isValidEmail: function (ref) {
            var value = ref.getDOMNode().value && ref.getDOMNode().value.trim();
            return REGEXRULES.EMAIL.test(value);
        },
        isValidPhoneNumber: function (ref) {
            var value = ref.getDOMNode().value && ref.getDOMNode().value.trim();
            return REGEXRULES.PHONE.test(value);
        },
        isValidPattern: function (ref, pattern) {
            var value = ref.getDOMNode().value && ref.getDOMNode().value.trim();
            var regex = new RegExp(pattern);
            return regex.test(value);
        },
        isMinValid: function (ref, min) {
            var value = ref.getDOMNode().value && ref.getDOMNode().value.trim();
            return value.length >= min;
        },
        isMaxValid: function (ref, max) {
            var value = ref.getDOMNode().value && ref.getDOMNode().value.trim();
            return value.length <= max;
        },
        isEqual: function (ref, comparable) {
            var value = ref.getDOMNode().value && ref.getDOMNode().value.trim();
            return value == comparable;
        }
    };

    var validate = function (rules, context) {
        var errors = [];
        if (typeof rules === undefined || rules.length === 0) {
            return errors;
        }
        rules.forEach(function (rule) {
            if(!this.refs[rule.field]) {
                return;   
            }
            var ele = this.refs[rule.field];
            if (rule.required) {
                if (!validator.isEmpty(ele)) {
                    errors.push({
                        "field": rule.field,
                        "error": "Please enter "+rule.label
                    });
                    return;
                }
            }
            if ('min' in rule) {
                if (!validator.isMinValid(ele, rule.min)) {
                    errors.push({
                        "field": rule.field,
                        "error": rule.label + " must have minimum of " + rule.min + " characters"
                    });
                    return;
                }
            }
            if ('max' in rule) {
                if (!validator.isMaxValid(ele, rule.max)) {
                    errors.push({
                        "field": rule.field,
                        "error": rule.label + " must have maximum of " + rule.max + " characters"
                    });
                    return;
                }
            }
            if ('pattern' in rule) {
                if (!validator.isValidPattern(ele, rule.pattern)) {
                    errors.push({
                        "field": rule.field,
                        "error": rule.label + " is invalid"
                    });
                    return;
                }
            }
        }.bind(context));

        return errors;
    };
    
    validator.validate = validate;
    validator.REGEXRULES = REGEXRULES;
    
    module.exports = validator;

})();