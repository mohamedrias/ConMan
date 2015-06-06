/** @jsx React.DOM */
(function() {
   "use strict";
    
    var React = require("react"),
        Router = require("react-router"),
        Route = Router.Route,
        Link = Router.Link,
        LoginActionHandler = require("./../../actions/login.action"),
        UsersStore = require("./../../stores/users.stores"),
        LoginAction = require("./../../actions/login.action"),
        FormUtils = require("./../../utils/form.utils"),
        ValidatorUtils = require("./../../utils/validator.utils"),
        ErrorMessageHandlerMixin = require("./../mixins/errormessage.mixin");
        
    var LoginForm = React.createClass({
        mixins: [ErrorMessageHandlerMixin],
        getInitialState: function() {
            return { error: []}
        },
        contextTypes: {
            router: React.PropTypes.func
        },
        /**
        *   Fetch validation rules for this form from server and load
        */
        validatorRules : function() {
            return [
              {
                "field": "userName",
                "required": true,
                "min": 4,
                "max": 15,
                'label' : 'username'
              },
              {
                "field": "password",
                "required": true,
                "min": 4,
                'max' : 13,
                'label': 'password'
              }
            ]
        },
        componentWillMount: function() {
           
        },
        componentDidMount: function() {
            //TODO: replace with document.querySelector
            this.refs.userName.getDOMNode().addEventListener("input", this.removeError.bind(self, 'userName'));
            this.refs.password.getDOMNode().addEventListener("input", this.removeError.bind(self, 'password'));
        },
        render: function() {
            return (
                
                <div id="content" className="animated fadeInUp">
                    <form onSubmit={this.login} ref="loginForm">
                        <div className="form-horizontal">
                          {FormUtils.renderTextInput('userName', 'username')}
                          {FormUtils.renderPasswordInput('password', 'password')}
                        </div>
                        <div className="form-group has-error" ref="errorMessage">
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                    </form>
                </div>
            );
        },
        login: function(e) {
            e.preventDefault();
            var errors = [];
            this.setState({error : []});   
            var username = this.refs.userName.getDOMNode().value.trim(),
                password = this.refs.password.getDOMNode().value.trim();
            errors = ValidatorUtils.validate(this.validatorRules(), this);
            if(errors.length > 0) {
                this.setState({error : errors});  
                errors.forEach(function(error) {
                    this.addError(error);
                }.bind(this));
                return;
            } else {
                this.validatorRules().forEach(function(rule) {
                    this.removeError(rule.field);
                }.bind(this));
                LoginAction.login(username, password);
                if(UsersStore.isLoggedIn()) {
                    this.context.router.transitionTo("contacts");
                } else {
                    this.refs.errorMessage.getDOMNode().textContent = 'Invalid Username/Password';
                }
            }
        }
    });
    
    var Login = React.createClass({
        contextTypes: {
            router: React.PropTypes.func
        },
        componentWillMount: function() {
            if(this.props.isAuthenticated){
                this.context.router.transitionTo("contacts");   
            }
        },
        render: function() {
        var header = <header id="page-header" className="clearfix">
                <div className="container">
                    <h2>Login</h2>
                </div>
            </header>;
        return (
                <section id="primary" className="clearfix ">
                    {header}
                    <LoginForm/>
                </section>
            );   
        }
        
    });
    module.exports = Login;
})();
