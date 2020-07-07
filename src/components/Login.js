import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <div className="d-flex justify-content-center">
    <div className="flex-column">
      <h2 className="pt-4 text-center">Inventory Login</h2>
      <p className="text-center">Sign in to manage your clients' inventory.</p>
      <div className="text-center">
      <button className="btn btn-outline-dark align-self-center" onClick={() => props.authenticate("Google")}>
        Log In With Google
      </button>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
