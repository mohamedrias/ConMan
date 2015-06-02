var React = require("react"); 
var MainContent = require("./../maincontent/maincontent.react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var Header = require("./common/header.react");
var ContactApp = React.createClass({ 
    render: function() { 
        return (
            <div id="site-container" className="clearfix">
                <Header/>
                <RouteHandler/> 
            </div>
        ); 
    } 
});

module.exports = ContactApp;