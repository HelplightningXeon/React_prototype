var React = require('react');
var $ = require("jquery");

var UserTable = require('../users/user_table.js.jsx');
var UserModel = require('../users/user_model.js.jsx');

module.exports = React.createClass({

  loadCallsFromServer: function() {
    $.ajax({
      url: "http://localhost:32769/calls", // this.props.src,
      dataType: 'json',
      crossDomain: true,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        if (xhr.status == 401) {
	  alert("Login first");
	  this.props.history.pushState(null, `/sign_in`);
	} else {
          console.error(this.props.url, status, err.toString());
	}
      }.bind(this)
    });
  },

  handleUserModelShow: function(userId) {
    this.setState({userId: userId});
  },

  getInitialState: function() {
    return {data: [], userId: undefined};
  },

  componentDidMount: function() {
    this.loadCallsFromServer();
  },

  render: function() {
    return (
      <div>
        <div className="container-fluid main-content">
          
          <div className="page-title">
            <h1>
              Calls
            </h1>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="widget-container fluid-height clearfix" style={{minWidth: '568px'}} >
                <div className="heading" id="tableHeading">
                  <span style={{color: 'red'}}></span>
                    <a href="#" className="click_me"><i className='fa fa-refresh'></i> Refresh</a>
                </div>
                <div id="update"></div>
                <UserTable data={this.state.data} onUserModelShow={this.handleUserModelShow} />
              </div>
            </div>
          </div>

        </div>
        
        <UserModel userId={this.state.userId} />
      </div>
    );
  }
});

