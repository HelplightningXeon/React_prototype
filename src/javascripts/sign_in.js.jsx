var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
      e.preventDefault();
      alert("To sign in");
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
		    <div><button type="submit" value="Sign In" className="btn btn-lime btn-lg" /></div>
		</form>
	    </div>
	</div>
      </div>
    );
  }
});
