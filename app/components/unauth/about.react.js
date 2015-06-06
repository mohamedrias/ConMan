/** @jsx React.DOM */
(function() {
    "use strict";
    var React = require("react"),
        HeaderMixin = require("./../mixins/header.mixin"),
        AboutComponent = React.createClass({
            mixins: [HeaderMixin],
            render: function() {
                return (
                        <section id="primary" className="clearfix about">
                            {this.getHeader('About')}
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
