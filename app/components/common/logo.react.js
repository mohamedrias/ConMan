var React = require("react");

var Logo = React.createClass({
	render: function() {
		return (
			<div id="logo">
                <a title="Team Talk" href="#">
                      <h1 className="site-title">CONMAN</h1>
                 </a>
            </div>
		);	
		
	}
});

module.exports = Logo;