/** @jsx React.DOM */
var React = require('react');
var SearchEl = React.createClass({

  
  render : function() {
      return (
        <header id="page-header" className="clearfix">
        <div className="container">
        <form action="/app" className="search-form" method="get" role="search">
          <i className="icon-search"></i>
            <i className="icon-spinner icon-spin"></i>
            <input type="text" ref="search" placeholder="Search contact.."  onChange={this.filter} className="search-field" />
        </form>
        </div>
        </header>
      )
  },
  filter: function() {
      var keyword = this.refs.search.getDOMNode().value;
      this.props.searchHandler(keyword);
  }
});

module.exports = SearchEl;