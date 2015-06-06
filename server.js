var koa = require("koa"),
    router = require("koa-router"),
    middlewares = require("koa-middlewares"),
    app = module.exports = koa(),
    serve = require("koa-static"),
    views = require("koa-views");

require('node-jsx').install();

var React = require("react"),
    Router = require("react-router"),
    UserStores = require("./app/stores/users.stores"),
    loginAction = require("./app/actions/login.action"),
    AppComponent = React.createFactory(require("./app/components/unauth/login.react"));
    
app.use(views('views', {
  map: {
    html: 'underscore'
  }
}));

/**
*   Load all middlewares Here
*/
app.use(serve(__dirname + "/public"));
app.use(middlewares.router(app));


/**
*   App specific filtering/Authentication logic here
*/
app.use(function* (next) {
    //TODO: Add filter
    yield next;
});


var routes = require("./app/routes/routes");
app.get("/testing", function* () {
    // Just playing around to see Dispatcher for SERVER_ACTION
    //loginAction.login("mohamedrias", "baba");
    var self = this;
    Router.run(routes, function(Handler, routerState) {
        console.log( routerState);
        var html = React.renderToStaticMarkup(React.createElement(Handler));
        console.log(html);
    });
    var markup = React.renderToString(AppComponent());
    yield this.render('index', {
        reactapp: markup
    });
});

var server = app.listen(3000, function* () {
    console.log("connection is established");
});
