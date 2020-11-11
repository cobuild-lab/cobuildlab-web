import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const toggleNav = () => {
    setNavbar(!navbar);
  };
  return (
    <Fragment>
      <header>
        <Container fluid={true}>
          <Row>
            <Col>
              <div className="top-header">
                <div className="logo">
                  <a className="navbar-brand" href="#">
                    <img src="assets/images/landing/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="main-menu m-x-auto" id="nav">
                  <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#scroll-spy"
                      aria-controls="scroll-spy"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={toggleNav}>
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className={`collapse navbar-collapse ${navbar === true ? 'show' : ''}`}
                      id="scroll-spy">
                      <ul className="navbar-nav mx-auto nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="#home">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#pages">
                            pages
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#portfolio">
                            portfolio
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#feature">
                            features
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://pixelstrap.freshdesk.com">
                            support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="purchase-block">
                  <span className="cartpurchase">
                    <i className="fa fa-cart-arrow-down"></i>
                  </span>
                  <a
                    className="purchase-btn"
                    href="https://themeforest.net/user/pixelstrap/portfolio">
                    purchase
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
