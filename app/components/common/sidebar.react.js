var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var UserProfile = React.createClass({
	render : function() {
		return (
			<div id="user-nav" className="clearfix">
				<a href="#" className="clearfix collapsed" data-toggle="collapse">
					<img src="http://0.gravatar.com/avatar/?s=65&amp;d=mm&amp;r=g" 
							className="avatar avatar-65 photo avatar-default" height="65" width="65" />
					<strong><span>Mohamed Rias</span></strong>
				</a>
				<div id="guest-nav-dropdown" className="collapse" role="menu"></div>
			</div>
		)	
	}
});


var NavMenu = React.createClass({
	render: function() {
		
		return (
			<div className="navvy">
				<a id="mobile-nav-toggle" href="#"><i className="icon-reorder"></i></a>
				<div id="nav-mobile">
					<nav id="nav-primary">
						<h4 className="nav-primary-title"><i className="icon-reorder"></i>Menu</h4>
						<ul id="menu-primary-nav" className="menu">
							<li id="menu-item-31" className="menu-item menu-item-type-custom">
								<a href="http://demo.herothemes.com/teamtalk/">Home</a>
							</li>
							<li className="menu-item menu-item-type-custom">
								<Link to="contacts">Contacts</Link>
							</li>
							<li className="menu-item menu-item-type-custom">
								<Link to="addcontact">Add Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		
		);	
		
	}
});

var Sidebar = React.createClass({
			render: function () {
					return (
						<UserProfile/>
						<NavMenu/>
					)
			}
});
				
module.exports = Sidebar;