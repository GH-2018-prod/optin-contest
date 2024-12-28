import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { handleLogout } from "../helpers/handleLogout";

const Navbar = ({ userEmail }) => {
  const dispatch = useDispatch();
  return (
    <div className="container mt-3">

      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5 mb-5">
          <div className="container-fluid">
            {/* Mensaje de bienvenida */}
            <span className="navbar-brand ">
              Welcome, <strong>{userEmail}</strong>
            </span>

            {/* Botón de Logout */}
            <button
              className="btn btn-outline-danger"
              onClick={ () => handleLogout( dispatch )}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>

  );
};

Navbar.propTypes = {
  userEmail: PropTypes.string.isRequired,
  //onLogout: PropTypes.func.isRequired,
};

export default Navbar;
