(function() {
    "use strict";
    var React = require("react"),
        Router = require("react-router"),
        RouteHandler = Router.RouteHandler,
        Link = Router.Link;

    var UserProfile = React.createClass({
        render : function() {
            return (
                <div id="user-nav" className="clearfix">
                    <a href="#" className="clearfix collapsed" data-toggle="collapse">
                        <img src="http://0.gravatar.com/avatar/?s=65&amp;d=mm&amp;r=g" 
                                className="avatar avatar-65 photo avatar-default" height="65" width="65" />
                        <strong><span>{this.props.fullName}</span></strong>
                    </a>
                    <div id="guest-nav-dropdown" className="collapse" role="menu"></div>
                </div>
            )	
        }
    });


    var NavMenu = React.createClass({
        componentWillMount: function() {
        },

        render: function() {

            return (
                <div className="navvy">
                    <a id="mobile-nav-toggle" href="#"><i className="icon-reorder"></i></a>
                    <div id="nav-mobile">
                        <nav id="nav-primary">
                            <h4 className="nav-primary-title"><i className="icon-reorder"></i>Menu</h4>
                            <ul id="menu-primary-nav" className="menu">
                                <li id="menu-item-31" className="menu-item">
                                    <a href="#">About</a>
                                </li>

                                {this._renderSpecificLinks()}
                            </ul>
                        </nav>
                    </div>
                </div>

            );	

        },
        _renderSpecificLinks : function() {
                if(!this.props.isAuthenticated) {
                    return (
                        <li className="menu-item menu-item-type-custom">
                            <Link to="login">Login</Link>
                        </li>
                    );
                } else {
                    return (
                        <div>
                            <li className="menu-item">
                                <Link to="contacts">Contacts</Link>
                           </li>
                            <li className="menu-item">
                                <Link to="addcontact">Add Contact</Link>
                            </li>
                            <li className="menu-item">
                                <a href="#" onClick={this.logout} >Logout</a>
                            </li>
                        </div>
                    );
                }
            },
        logout: function() {
            this.props.logout();
        }
    });

    var Sidebar = React.createClass({
                componentWillMount: function() {
                },
                getFullName : function() {
                    return this.props.userProfile.firstName + " "+ this.props.userProfile.lastName;    
                },
                render: function () {
                        return (
                            <div>
                            { this.props.isAuthenticated?
                              <UserProfile fullName={this.getFullName()}/> : null
                            }
                              <NavMenu isAuthenticated={this.props.isAuthenticated} logout={this.props.logout.bind(null, this)}/>
                            </div>
                        )
                }
    });
				
    module.exports = Sidebar;
})();