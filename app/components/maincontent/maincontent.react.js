/** @jsx React.DOM */
var React = require('react'),
    SearchEl = require("./search.react")
    ContactsList = require("./contactslist.react");

var MainContent = React.createClass({
   getInitialState: function() {

       return {
            contacts: this.props.userProfile && this.props.userProfile.contacts || []
        }
   },

    contextTypes: {
            router: React.PropTypes.func
        },
    
    componentWillMount: function() {
        if(!this.props.isAuthenticated) {
            this.context.router.transitionTo("login");
        }
        console.log("Compoentn Will Mount");
    },
    componentDidMount: function() {
        console.log("Component Did mount");  
    },
  render : function() {
      return (
        <section id="primary" className="clearfix">
            <SearchEl searchHandler={this.filterContacts}/>
            <ContactsList contacts={this.state.contacts}/>
        </section>
      )
  },
    filterContacts: function(keyword) {
        if(!keyword) {
            this.setState({contacts: this.props.userProfile.contacts});   
        } else {
            var regex = new RegExp("^"+keyword+".*", "gi");
            var contacts = this.state.contacts.filter(function(contact, index) {
                return contact.firstName.match(regex) || contact.lastName.match(regex)
                    || contact.phoneNumber.indexOf(keyword) != -1;
            });
            this.setState({
                contacts: contacts
              });   
        }
    }
});

module.exports = MainContent;