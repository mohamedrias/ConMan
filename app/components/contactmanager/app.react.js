(function() {
    "use strict";
    var React = require("react"),
        MainContent = require("./../maincontent/maincontent.react"),
        Router = require("react-router"),
        RouteHandler = Router.RouteHandler,
        Header = require("./../common/header.react"),
        Users = require("./../../stores/data").Users,
        UserProfile = Users[0],
        
        ContactApp = React.createClass({
            getInitialState: function() {
                return {
                    isAuthenticated: false,
                    userProfile : UserProfile
                }
            },
            contextTypes: {
                    router: React.PropTypes.func
                },
            render: function() { 
                return (
                    <div id="site-container" className="clearfix">
                        <Header userProfile={this.state.userProfile} isAuthenticated={this.state.isAuthenticated} logout={this.logout}/>
                        <RouteHandler userProfile={this.state.userProfile} login={this.login} isAuthenticated={this.state.isAuthenticated}  logout={this.logout}/> 
                    </div>
                ); 
            },
            login: function(loggedIn) {
                if(true) {
                    this.setState({
                        isAuthenticated: true,
                        userProfile: UserProfile
                    });
                    this.context.router.transitionTo("contacts");
                }
            },
            logout: function() {
                this.setState({
                    isAuthenticated: false,
                    userProfile: undefined
                });   
                this.context.router.transitionTo("login");
            }
        });

    module.exports = ContactApp; 
})();