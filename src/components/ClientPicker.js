import React from "react";
import PropTypes from "prop-types";

class ClientPicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const clientName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/client/${clientName}/Inventory`);
  };
  render() {
    return (
      <div className="container">
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Client</h2>
          <input
            className="form-control mt-3"
            type="text"
            ref={this.myInput}
            required
            placeholder="Client Name"
            defaultValue=''
          />
          <button className="btn btn-primary mt-3" type="submit">Go to Client Inventory →</button>
        </form>
      </div>
    );
  }
}

export default ClientPicker;
