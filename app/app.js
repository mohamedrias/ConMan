var React = require("react");
var Router = require("react-router");
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute, 
    NotFoundRoute = Router.NotFoundRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;
var ConMan = require('./components/contactmanager/app.react');
var MainContent = require('./components/maincontent/maincontent.react');
var AddContact = require("./components/addcontact/addcontact.react");
var Login = require("./components/unauth/login.react");
//React.render(ConManComponent(), document.querySelector('body'));



var routes = (
  <Route handler={ ConMan } >
      <DefaultRoute handler={Login } />
      <Route name= "contacts" path= "contacts" handler= { MainContent } />
      <Route name="addcontact" path="addcontact" handler ={AddContact} />
      <Route name="login" path="login" handler={Login} />
   </Route>
    
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.querySelector('body'));
});
module.exports = ConMan;