var koa = require("koa"),
    router = require("koa-router"),
    middlewares = require("koa-middlewares"),
    app = module.exports = koa(),
    serve = require("koa-static"),
    React = require("react"),
    UserStores = require("./app/stores/users.stores"),
    loginAction = require("./app/actions/login.action");
    

var response = [{
    name: "Rias",
    "occupation": "TCS"
    }];

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


app.get("/auth", function* () {
    // Just playing around to see Dispatcher for SERVER_ACTION
    loginAction.login("mohamedrias", "baba");
    this.body = response;
});

var server = app.listen(3000, function* () {
    console.log("connection is established");
});