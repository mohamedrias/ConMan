/** @jsx React.DOM */
(function() {
    var React = require("react"),
        AddContactForm = require("./addcontactform.react"),
        ConManActions = require("./../../actions/conman.action.js"),
        HeaderMixin = require("./../mixins/header.mixin"),
    
    AddContactPlaceHolder = React.createClass({
        contextTypes: {
           router: React.PropTypes.func
        },
        render: function() {
            return <div>
                <form onSubmit={this.handleSubmit}>
                    <AddContactForm ref="contactForm" />
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        },
        handleSubmit: function(e) {
            e.preventDefault();
            if (this.refs.contactForm.isValid()) {
                var contact = this.refs.contactForm.getFormData();
                ConManActions.addContact(contact);
                this.context.router.transitionTo("contacts");

            }
          }
    });
 



    var AddContact = React.createClass({
        contextTypes: {
                router: React.PropTypes.func
        },
        mixins: [HeaderMixin],
        componentWillMount: function() {
            if(!this.props.isAuthenticated) {
                this.context.router.transitionTo("login");
            }
        },

        render : function() {
            return (
                    <section id="primary" className="clearfix ">
                        {this.getHeader('Add Contact')}
                        <div id="content" className="animated fadeInUp">
                            <AddContactPlaceHolder/>
                        </div>
                    </section>
            );
        },


    });

    module.exports = AddContact;
})();
