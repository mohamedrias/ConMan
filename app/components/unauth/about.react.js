(function() {
    "use strict";
    
    var React = require("react"),
        
        AboutComponent = React.createClass({
            render: function() {
                var header = <header id="page-header" className="clearfix">
                    <div className="container">
                        <h2>About</h2>
                    </div>
                </header>;
                return (
                        <section id="primary" className="clearfix about">
                            {header}
                            <div id="content" className="animated fadeInUp">
                                <h2>Welcome to ConMan!</h2>
                                <blockquote>It's a contact manager app built using KOA & React</blockquote>
                                <div>
                                    Currently there is no registration feature available. Please use the following credentials to login and test the application.
                                    <br></br>
                                    <p>username: mohamedrias</p>
                                    <p>Password: baba</p>
                                </div>
                            </div>
                        </section>
                    );   
        }   
        });
    module.exports = AboutComponent;
})();