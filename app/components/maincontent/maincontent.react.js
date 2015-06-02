/** @jsx React.DOM */
var React = require('react');
var SearchEl = require("./search.react");
var ContactsList = require("./contactslist.react");

var MainContent = React.createClass({
  render : function() {
      return (
        <section id="primary" className="clearfix">
            <SearchEl keyword=""/>
            <ContactsList/>
        </section>
      )
  }
});

module.exports = MainContent;