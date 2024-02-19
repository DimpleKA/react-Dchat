import React from 'react';

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Navbar Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Messages and Guardians */}
          <div className="d-flex align-items-center">
            <div className="me-3">
              <span className="text-white me-1">Messages</span>
              <span className="badge bg-primary">4</span>
            </div>
            <div>
              <span className="text-white me-1">Gardenians</span>
              <span className="badge bg-success">2</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="fw-bold mb-0">Dchat</h5> {/* Added fw-bold for bold text */}
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-center">
          <ul className="list-group list-group-flush d-inline-block">
            <li className="list-group-item h4 py-3">Profile</li>
            <li className="list-group-item h4 py-3">Events</li>
            <li className="list-group-item h4 py-3">SwipeNmatch</li>
            <li className="list-group-item h4 py-3">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
