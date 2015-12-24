require("../css/bootstrap_asset.min.scss");
require("../css/style_asset.scss");
require("../css/color/gray.css");
require("../css/font-awesome_asset.min.scss");

var React = require('react');
var ReactDOM = require('react-dom');

var Calls = require('./components/calls/calls.js.jsx');

ReactDOM.render(<Calls src="http://localhost:32769/calls/retrieve_calls" />, document.getElementById('example'));
