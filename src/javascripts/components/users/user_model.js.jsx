var React = require("react");

module.exports = React.createClass({
  getInitialState: function() {
    return {email: '', username: '', status: '', expires_at: '', active: '', avatar: ''};
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadUserFromServer(nextProps.userId);
  },

  loadUserFromServer: function(id) {
    if (!id) return;
    var path = "/admin/users/" + id + ".json";
    $.ajax({
      url: path,
      dataType: 'json',
      success: function(data) {
        this.setState({id: data.id, name: data.name, email: data.email, username: data.username, status: data.status, expires_at: data.expires_at, active: data.active, avatar: data.avatar});
      }.bind(this),
        error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="modal fade" id="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button aria-hidden="true" className="close" data-dismiss="modal" type="button">&times;</button>
              <h4 className="modal-title">
                User Detail
              </h4>
            </div>
            <div className="modal-body">
              <h2>
                <img id="avatar" src={this.state.avatar} style={{width: '64px', height: '64px', WebkitBorderRadius: '32px', MozBorderRadius: '32px', borderRadius: '32px', marginBottom: '15px'}} />
                <span id="name"><a href={"/admin/users/" + this.state.id + "/edit"}>{this.state.name}</a></span>
              </h2>

              <table className="table table-striped">
                <tbody>
                <tr>
                  <td>
                    Email
                  </td>
                  <td>
                    <span id="email">{this.state.email}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Username
                  </td>
                  <td>
                    <span id="username">{this.state.username}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status
                  </td>
                  <td>
                    <span id="status">{this.state.status}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Expires at
                  </td>
                  <td>
                    <span id="expires_at">{this.state.expires_at}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Active?
                  </td>
                  <td>
                    <span id="active">{this.state.active}</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-default-outline" data-dismiss="modal" type="button">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

