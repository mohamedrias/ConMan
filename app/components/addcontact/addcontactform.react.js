(function() {
    "use strict";
    var React = require("react"),
        FormUtils = require("./../../utils/form.utils"),
        ValidatorUtils = require("./../../utils/validator.utils"),
        ErrorMessageHandlerMixin = require("./../mixins/errormessage.mixin");

     /**
     * A contact form with certain optional fields.
     */
    var AddContactForm = React.createClass({
        mixins: [ErrorMessageHandlerMixin],
        getInitialState: function () {
            return {
                errors: {}
            }
        },

        getGroups: function() {
            return ["Family", "Friends", "Colleagues"];
        },

        componentDidMount: function () {
            var self = this;
            this.refs.firstName.getDOMNode().addEventListener("input", this.removeError.bind(self, 'firstName'));
            this.refs.lastName.getDOMNode().addEventListener("input", this.removeError.bind(self, 'lastName'));
            this.refs.phoneNumber.getDOMNode().addEventListener("input", this.removeError.bind(self, 'phoneNumber'));
            this.refs.email.getDOMNode().addEventListener("input", this.removeError.bind(self, 'email'));
        },
        /**
         * Fetch validation rules specific to this form from server
         * @returns {Array} Validation Rules
         */
        validationRules: function () {
            return [{
                    "field": "firstName",
                    "required": true,
                    "min": 4,
                    "max": 15,
                    'label': 'First name'
                  },
                {
                    "field": "lastName",
                    "required": true,
                    "min": 4,
                    'max': 13,
                    'label': 'Last name'
                },
                {
                    "field": "phoneNumber",
                    "required": true,
                    'label': 'Phone Number',
                    'pattern': ValidatorUtils.REGEXRULES.PHONE
                },
                {
                    "field": "email",
                    "required": true,
                    'label': 'Email',
                    'pattern': ValidatorUtils.REGEXRULES.EMAIL
                }
               ];
        },
        /**
         * Validate with the given rules & write logic
         * @returns {[[Type]]} [[Description]]
         */
        isValid: function () {
            var isValid = true,
                errors = ValidatorUtils.validate(this.validationRules(), this);
            if (errors.length > 0) {
                isValid = false;
                errors.forEach(function (error) {
                    this.addError(error);
                }.bind(this));
            } else {
                this.validationRules().forEach(function (rule) {
                    this.removeError(rule.field);
                }.bind(this));
            }
            return isValid;
        },
        /**
         * Get all form related data at once place
         * @returns {Object} add contact form data
         */
        getFormData: function () {
            var data = {
                firstName: this.refs.firstName.getDOMNode().value,
                lastName: this.refs.lastName.getDOMNode().value,
                phoneNumber: this.refs.phoneNumber.getDOMNode().value,
                email: this.refs.email.getDOMNode().value,
                group: this.refs.group.getDOMNode().value
            }
            return data
        },

        render: function() {
            return <div className="form-horizontal">
                        {FormUtils.renderTextInput('firstName', 'First Name')}
                        {FormUtils.renderTextInput('lastName', 'Last Name')}
                        {FormUtils.renderTextInput('phoneNumber', 'Phone number')}
                        {FormUtils.renderTextInput('email', 'Email')}
                        {FormUtils.renderSelect('group', 'Group', this.getGroups())}
                </div>
          }
    });

    module.exports = AddContactForm;

})();
