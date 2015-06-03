(function() {
    "use strict";
    /** @jsx React.DOM */
    var React = require('react');
    
    var ContactsList = React.createClass({
      render : function() {
          return (
            <div id="content">
              {
                this.props.contacts.map(function(contact) {
                    return (<article className="clearfix animated fadeInUp hentry">
                    <div className="gravatar">
                        <a href="#user">
                            <img alt="" 
                                src="http://2.gravatar.com/avatar/808e2adcc2652ce41ed5da69e1b7994c?s=70&amp;d=mm&amp;r=g"
                                className="avatar avatar-70 photo" height="70" width="70" />
                        </a>
                    </div>


                    <div className="entry-wrap ht-entry-body-closed">
                        <header className="entry-header">
                            <h2 className="entry-title">
                                <a className="ht-entry-open" rel="bookmark">{contact.firstName+ " "+contact.lastName}</a>
                                <a href="#" className="entry-permalink"><i className="icon-link"></i></a>
                            </h2>
                            <ul className="entry-meta">
                                <li>Category </li>
                                <li className="entry-meta-category">
                                    <a className="category-color-1" href="#/contacts">Family</a>
                                </li>
                            </ul>
                        </header>
                    </div>
                </article>)
                })
              }
            </div>
          );
      }
    });

    module.exports = ContactsList;

})();