import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleCloseOffcanvas = () => {
    const offcanvas = document.getElementById('offcanvasRight');
    const offcanvasInstance = new window.bootstrap.Offcanvas(offcanvas); // Ensure 'bootstrap' object is defined
    offcanvasInstance.hide(); // Close the offcanvas
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex align-items-center">
            <div className="me-3">
              <Link to="/messages" className="text-white me-1 text-decoration-none">Messages</Link>
              <span className="badge bg-primary">4</span>
            </div>
            <div>
              <Link to="/gardenians" className="text-white me-1 text-decoration-none">Gardenians</Link>
              <span className="badge bg-success">2</span>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="fw-bold mb-0">Dchat</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-center">
          <ul className="list-group list-group-flush d-inline-block">
            <li className="list-group-item h4 py-3"><Link to="/profile" className="text-dark text-decoration-none" onClick={handleCloseOffcanvas}>Profile</Link></li>
            <li className="list-group-item h4 py-3"><Link to="/events" className="text-dark text-decoration-none" onClick={handleCloseOffcanvas}>Events</Link></li>
            <li className="list-group-item h4 py-3"><Link to="/swipenmatch" className="text-dark text-decoration-none" onClick={handleCloseOffcanvas}>SwipeNmatch</Link></li>
            <li className="list-group-item h4 py-3"><Link to="/logout" className="text-dark text-decoration-none" onClick={handleCloseOffcanvas}>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
