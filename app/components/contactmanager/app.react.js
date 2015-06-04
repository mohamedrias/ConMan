(function() {
    "use strict";
    var React = require("react"),
        MainContent = require("./../maincontent/maincontent.react"),
        Router = require("react-router"),
        RouteHandler = Router.RouteHandler,
        Header = require("./../common/header.react");
    
    var UsersStore = require("./../../stores/users.stores");
        
    var getAppState = function() {
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
                    router: React.PropTypes.func
                },
            componentWillMount: function() {
                if(!UsersStore.isLoggedIn())
                    this.context.router.transitionTo("login");
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
                if(!this.state.isAuthenticated)
                    this.context.router.transitionTo("login");
            }
        });

    module.exports = ContactApp; 
})();