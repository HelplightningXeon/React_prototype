var React = require('react');
var Route = require('react-router').Route;
var Calls = require('./components/calls/calls.js.jsx');
var SignIn = require('./sign_in.js.jsx');

module.exports = (
    <Route path="/">
	<Route path="sign_in" component={SignIn} />
	<Route path="calls" component={Calls} />
    </Route>
);

