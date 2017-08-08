"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Footer = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              &copy; Pluralsight
          </div>
        </nav>
		);
	}
});

module.exports = Footer;
