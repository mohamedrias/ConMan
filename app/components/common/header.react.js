(function() {
    "use strict";
    var React = require("react"),
        Logo = require("./Logo.react"),
        Sidebar = require("./sidebar.react"),
        Header = React.createClass({
            componentWillMount: function() {
                console.log("props", this.props.isAuthenticated, this.props);  
            },
            render: function() {
                return (
                    <header id="site-header" className="clearfix" role="banner">
                        <Logo/>
                        <Sidebar userProfile={this.props.userProfile} logout={this.props.logout.bind(null, this)} isAuthenticated={this.props.isAuthenticated}/>
                    </header>
                );	
            }
        });
    module.exports = Header;
})();