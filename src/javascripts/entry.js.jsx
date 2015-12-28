require("../css/bootstrap.min.scss");
require("../css/style.scss");
require("../css/color/gray.css");
require("../css/font-awesome.min.scss");

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;

//ReactDOM.render(<Calls src="http://localhost:32769/calls/retrieve_calls" />, document.getElementById('example'));
var Router = require('react-router').Router;
var routes = require('./routes.js.jsx');

ReactDOM.render(<Router routes={routes} />, document.getElementById('example'));
