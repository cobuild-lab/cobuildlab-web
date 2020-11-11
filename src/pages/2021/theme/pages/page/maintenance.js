import React from 'react';

const Maintenance = () => (
  <section className="maintenance-sec">
    <div className="snow snow--near"></div>
    <div className="snow snow--near snow--alt"></div>
    <div className="snow snow--mid"></div>
    <div className="snow snow--mid snow--alt"></div>
    <div className="snow snow--far"></div>
    <div className="snow snow--far snow--alt"></div>
    <div className="center-content">
      <div className="maintenance-container agency">
        <h1>oops!</h1>
        <h4>maintenance in process</h4>
        <h2>we will be back soon</h2>
        <div className="social m-t-20">
          <ul>
            <li>
              <a href="#">
                <i aria-hidden="true" className="fa fa-facebook center-content"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i aria-hidden="true" className="fa fa-twitter center-content"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i aria-hidden="true" className="fa fa-google center-content"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i aria-hidden="true" className="fa fa-instagram center-content"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Maintenance;
