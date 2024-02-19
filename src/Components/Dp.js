import React from 'react';

const Dp = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_"
                alt=""
                width="50"
                height="50"
                className="d-inline-block align-text-top me-3"
                style={{ borderRadius: '50%' }}
              />
              <div>
                <h4 style={{ margin: '0' }}>Alexandra Daddario</h4>
                <h5 className="text-muted">online</h5>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Dp;
