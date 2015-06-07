/** @jsx React.DOM */
(function() {
   "use strict";
    
    var React = require("react"),
        HeaderMixin = require("./../../mixins/header.mixin"),
        LoginForm = require("./loginform.react");
    
    var Login = React.createClass({
        mixins: [HeaderMixin],
        contextTypes: {
            router: React.PropTypes.func
        },
        componentWillMount: function() {
            if(this.props.isAuthenticated){
                this.context.router.transitionTo("contacts");   
            }
        },
        render: function() {
        return (
                <section id="primary" className="clearfix ">
                    {this.getHeader('Login')}
                    <LoginForm/>
                </section>
            );   
        }
        
    });
    module.exports = Login;
})();
