import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Speaker = () => (
  <section className="event speaker" id="speaker">
    <div className="circle"></div>
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title3">
            <div className="main-title">
              <h2>
                <span>our</span> speaker
              </h2>
            </div>
            <div className="sub-title">
              <p>
                Register now and reserve your seat for this <span>year's Unice,</span> the largest{' '}
                <span>web development</span> and online marketing <span>conference in UK,</span>
                covering everything you need to know in order to develop a successful online
                business.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3" sm="6" className="speker-container">
          <div className="text-center">
            <div className="team-img">
              <img alt="" className="img-fluid" src="/assets/images/event/l3-1.png" />
              <div className="overlay"></div>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-globe center-content"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="employee">
              <h5 className="e-name text-center">Vicky Smith</h5>
              <h6 className="post text-center ">UI/UX Designer - Little Big</h6>
            </div>
          </div>
        </Col>
        <Col md="3" sm="6" className="speker-container">
          <div className="text-center">
            <div className="team-img">
              <img alt="" className="img-fluid" src="/assets/images/event/l3-2.png" />
              <div className="overlay"></div>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-globe center-content"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="employee">
              <h5 className="e-name text-center">Sam Rowling</h5>
              <h6 className="post text-center ">Team Leader - otstrab</h6>
            </div>
          </div>
        </Col>
        <Col md="3" sm="6" className="speker-container">
          <div className="text-center">
            <div className="team-img">
              <img alt="" className="img-fluid" src="/assets/images/event/l3-3.png" />
              <div className="overlay"></div>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-globe center-content"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="employee">
              <h5 className="e-name text-center">Mark Tucker</h5>
              <h6 className="post text-center ">App Developer - Jumpster</h6>
            </div>
          </div>
        </Col>
        <Col md="3" sm="6" className="speker-container">
          <div className="text-center">
            <div className="team-img">
              <img alt="" className="img-fluid" src="/assets/images/event/l3-4.png" />
              <div className="overlay"></div>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google center-content"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-globe center-content"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="employee">
              <h5 className="e-name text-center">Sam Rowling</h5>
              <h6 className="post text-center ">Team Leader - otstrab</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Speaker;
