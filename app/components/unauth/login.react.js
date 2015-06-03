(function() {
   "use strict";
    
    var React = require("react");
    var Router = require("react-router");
    var Route = Router.Route,
        Link = Router.Link;
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
                    <div id="content" className="animated fadeInUp">
                        <button type="button" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                    </div>
                </section>
            );   
        },
        login: function() {
            this.props.login(true);
        }
    });
    module.exports = Login;
})();
