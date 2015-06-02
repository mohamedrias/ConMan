var React = require("react");
var Logo = require("./Logo.react");
var Sidebar = require("./sidebar.react");
var Header = React.createClass({
	render: function() {
		return (
			<header id="site-header" className="clearfix" role="banner">
                    <Logo/>
                    <Sidebar />
            </header>
		);	
		
	}
});

module.exports = Header;