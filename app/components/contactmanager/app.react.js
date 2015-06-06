/** @jsx React.DOM */
(function() {
    "use strict";
    var React = require("react"),
        MainContent = require("./../maincontent/maincontent.react"),
        Router = require("react-router"),
        Route = Router.Route,
        DefaultRoute = Router.DefaultRoute,
        RouteHandler = Router.RouteHandler,
        Link = Router.Link,
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
                    routeDepth: React.PropTypes.number
                },
            componentWillMount: function() {
                var self = this;
                /**
                 * Universal Error handler for the app
                 */
                if(typeof window !== "undefined") {
                    window.onerror = function() {
                        self.context.router.transitionTo("error");
                    };
                }

                // Logic to reroute to previous state if the user is logged in
                if(this.context.router) {
                    var currentRoute =  this.context.router.getRouteAtDepth(this.context.routeDepth).name || "contacts";
                    if(!UsersStore.isLoggedIn()) {
                        this.context.router.transitionTo("login");
                    } else {
                        currentRoute = currentRoute==="login"? "contacts" : currentRoute;
                        this.context.router.transitionTo(currentRoute);
                    }
                }


            },
            componentDidMount: function() {
                UsersStore.addChangeListener(this._changeHandler);  
            },
            componentWillUnmount: function() {
                UsersStore.removeChangeListener(this._changeHandler);  
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
