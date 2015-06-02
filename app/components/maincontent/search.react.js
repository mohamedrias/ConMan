/** @jsx React.DOM */
var React = require('react');
var SearchEl = React.createClass({

  update: function(e) {
      var keyword = this.refs.search.getDOMNode().value;
      //console.log(this.props.keyword, keyword);
  },
  render : function() {
      return (
        <header id="page-header" className="clearfix">
        <div className="container">
        <form action="/app" className="search-form" method="get" role="search">
          <i className="icon-search"></i>
            <i className="icon-spinner icon-spin"></i>
            <input type="text" ref="search" placeholder="Search contact.." onChange={this.update} className="search-field" />
        </form>
        </div>
        </header>
      )
  }
});

module.exports = SearchEl;