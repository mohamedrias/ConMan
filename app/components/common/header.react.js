(function() {
    "use strict";
    var React = require("react"),
        Logo = require("./Logo.react"),
        Sidebar = require("./sidebar.react"),
        Header = React.createClass({
            componentWillMount: function() {
            },
            render: function() {
                return (
                    <header id="site-header" className="clearfix" role="banner">
                        <Logo/>
                        <Sidebar userProfile={this.props.userProfile} isAuthenticated={this.props.isAuthenticated}/>
                    </header>
                );	
            }
        });
    module.exports = Header;
})();