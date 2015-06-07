/** @jsx React.DOM */
(function() {
    "use strict";
    var React = require("react");
    var Router = require("react-router");
    var Route = Router.Route,
        DefaultRoute = Router.DefaultRoute,
        NotFoundRoute = Router.NotFoundRoute,
        RouteHandler = Router.RouteHandler,
        Link = Router.Link,

        ConMan = require('./../components/contactmanager/app.react'),
        MainContent = require('./../components/maincontent/maincontent.react'),
        AddContact = require("./../components/addcontact/addcontact.react"),
        Login = require("./../components/unauth/login/login.react"),
        About = require("./../components/unauth/about.react"),
        NotFound = require("./../components/misc/404.react");

        var routes = (
          <Route handler={ ConMan } >
              <DefaultRoute handler={Login } />
              <Route name= "contacts" path= "contacts" handler= { MainContent } />
              <Route name="addcontact" path="addcontact" handler ={AddContact} />
              <Route name="login" path="login" handler={Login} />
              <Route name="about" path="about" handler={About} />
              <Route name="error" path="error" handler={NotFound} />
              <NotFoundRoute handler={NotFound}/>
           </Route>
        );

    module.exports = routes;
})();
