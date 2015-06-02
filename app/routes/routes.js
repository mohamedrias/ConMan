var routes = (
  <Route handler={App}>
    <Route name="taco" path="taco/:name" handler={Taco}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('example'));
});