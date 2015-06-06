(function() {
    "use strict";

    var React = require("react"),
        HeaderMixin = require("./../mixins/header.mixin"),
        NotFoundComponent = React.createClass({
            mixins: [HeaderMixin],
            render: function() {
                return (
                    <section id="primary" className="clearfix about">
                            {this.getHeader('Page Not Found!')}
                            <div id="content" className="animated fadeInUp">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="error-template">
                                            <h1>
                                                Oops!</h1>
                                            <h2>
                                                404 Not Found</h2>
                                            <div className="error-details">
                                                Sorry, an error has occured, Requested page not found!
                                            </div>
                                            <div className="error-actions">
                                                <a href="#/contacts" className="btn btn-primary btn-lg" style={{color: 'white'}}>
                                                    <span className="icon-home"> Go back Home</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                );
            }

        });

    module.exports = NotFoundComponent;
})();
