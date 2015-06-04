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




app.use(serve(__dirname + "/public"));
app.use(middlewares.router(app));

app.use(function* (next) {
    //TODO: Add filter
    yield next;
});

app.get("/auth", function* () {
    loginAction.login("mohamedrias", "baba");
    this.body = response;
});

var server = app.listen(3000, function* () {
    console.log("connection is established");
});