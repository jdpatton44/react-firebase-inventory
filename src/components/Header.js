import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <header className="top">
      <h1>{this.props.clientName} Inventory Management</h1>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
