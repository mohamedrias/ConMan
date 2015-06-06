/** @jsx React.DOM */
(function() {
    "use strict";
    var React = require("react");
    var Router = require("react-router"),
        routes = require("./routes/routes");

        Router.run(routes, function (Handler) {
          React.render(<Handler/>, document.querySelector('body'));
        });
    
})();
