var React = require('react');
var $ = require("jquery");

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
      url: "http://localhost:32769/users/sign_in",
      type: "POST",
      xhrFields: {
	  withCredentials: true
      },
      data: {
	  user: {login: 'xeon.wang@helplightning.com', password: 'xeon123'}
      },
      dataType: 'json',
      crossDomain: true,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        if (xhr.status == 401) {
	  alert("Login first");
	} else {
          console.error(this.props.url, status, err.toString());
	}
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
	<div className="row">
	    <div className="col-md-12">
		<div className="text-center">
		    <h1 className="lime text-center" style={{marginTop:'20px', marginBottom:'5px'}}>Help Lightning for Business</h1>

		    <h3>Welcome!</h3>
		</div>
	    </div>
	</div>

	<div className="row">
	    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
		<form onSubmit={this.handleSubmit}>
		    <div className="form-group">
			<input className="form-control" placeholder="Email or username" />
		    </div>

		    <div className="form-group">
			<input type="password" placeholder="Password" className="form-control" />
		    </div>
		    <div><button type="submit" name="commit" Value="Sign In" className="btn btn-lime btn-lg" /></div>
		</form>
	    </div>
	</div>
      </div>
    );
  }
});
