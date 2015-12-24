var React = require("react");

var CallItem = React.createClass({
  showUserModel: function(event) {
    var id = event.target.dataset.userid;
    this.props.onUserModelShow(id);
  },

  render: function() {
    return (
      <tr>
        <td data-toggle="modal" href="#modal" onClick={this.showUserModel} data-userid={this.props.data.dialer.id} style={{cursor: 'pointer'}}>{this.props.data.dialer.name}</td>
        <td data-toggle="modal" href="#modal" onClick={this.showUserModel} data-userid={this.props.data.dialer.id} style={{cursor: 'pointer'}}>{this.props.data.receiver.name}</td>
        <td>{this.props.data.started}</td>
        <td>{this.props.data.ended}</td>
        <td>{this.props.data.duration}</td>
      </tr>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    var nodes = this.props.data.map(function(node, i) {
      return (
        <CallItem key={i}  data={node} onUserModelShow={this.props.onUserModelShow} />
      );
    }.bind(this));
    return (
      <div className="widget-content padded clearfix">
        <table className="table table-striped table-rounded" id="dataTable1">
          <thead>
            <tr>
            <th>
              Dialer
            </th>
            <th>
              Receiver
            </th>
            <th>
              Started
            </th>
            <th>
              Ended
            </th>
            <th>
              Duration
            </th>
            </tr>
          </thead>
          <tbody>
            {nodes}
          </tbody>
        </table>
      </div>
    );
  }
});

