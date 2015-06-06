/** @jsx React.DOM */
(function() {
    "use strict";
    var React = require("react"),
        MainContent = require("./../maincontent/maincontent.react"),
        Router = require("react-router"),
        RouteHandler = Router.RouteHandler,
        Header = require("./../common/header.react");
    
    var UsersStore = require("./../../stores/users.stores");
        
    var getAppState = function() {
        UsersStore.init();
        return {
                    isAuthenticated: UsersStore.isLoggedIn(),
                    userProfile : UsersStore.getUserProfile()
                }   
    }
    var ContactApp = React.createClass({
            
        
            getInitialState: function() {
                return getAppState();
            },
            contextTypes: {
                    router: React.PropTypes.func,
                    routeDepth: React.PropTypes.func
                },
            componentWillMount: function() {
                // Logic to reroute to previous state if the user is logged in
                var currentRoute =  this.context.router.getRouteAtDepth(this.context.routeDepth).name || "contacts";
                if(!UsersStore.isLoggedIn()) {
                    this.context.router.transitionTo("login");
                } else {
                    currentRoute = currentRoute==="login"? "contacts" : currentRoute;
                    this.context.router.transitionTo(currentRoute);
                }
            },
            componentDidMount: function() {
                UsersStore.addChangeListener(this._changeHandler);  
            },
            render: function() { 
                return (
                    <div id="site-container" className="clearfix">
                        <Header userProfile={this.state.userProfile} isAuthenticated={this.state.isAuthenticated}/>
                        <RouteHandler userProfile={this.state.userProfile} isAuthenticated={this.state.isAuthenticated}/> 
                    </div>
                ); 
            },
            _changeHandler: function() {
                this.setState(getAppState());
                if(!UsersStore.isLoggedIn())
                    this.context.router.transitionTo("login");
                else
                    this.context.router.transitionTo("contacts");
            }
        });

    module.exports = ContactApp; 
})();