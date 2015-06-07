var koa = require("koa"),
    router = require("koa-router"),
    middlewares = require("koa-middlewares"),
    app = module.exports = koa(),
    serve = require("koa-static"),
    views = require("koa-views"),
    Q = require("q");

    require('node-jsx').install();

var React = require("react"),
    Router = require("react-router"),
    UserStores = require("./app/stores/users.stores"),
    loginAction = require("./app/actions/login.action"),
    routes = require("./app/routes/routes");




/**
*   Load all middlewares Here
*/
app.use(middlewares.bodyParser());
app.use(views('views', {
  map: {
    html: 'underscore'
  }
}));
app.use(serve(__dirname + "/public"));
app.use(middlewares.router(app));


/**
*   Converting the Router.run method to return a promise
*/
function getRouteContent(url) {
    var deferred = Q.defer();
    Router.run(routes, url , function(Handler, routerState) {
        var handlerElement = React.createElement(Handler);
        var html = React.renderToString(handlerElement);
        return deferred.resolve(html);
    });
    return deferred.promise;
}


app.use(function* (next) {
    //TODO: Add CORS filter or check headers before proceeding
    yield next;   
})

app.post("/api/login", function* (next) {
    this.body = this.request.body;
});

/**
*   Route starts here
*/
app.use(function* (next) {
    //TODO: Check if it's one of the react routes
    var promise = yield getRouteContent(this.req.url);
    yield this.render('index',  {
        reactapp : promise
    });
});

var server = app.listen(3000);
console.log("server running at port 3000");
