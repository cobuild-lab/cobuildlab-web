import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Calculate = () => (
  <section className="gym format bg-cal-bmi" id="bmi">
    <Container>
      <Row>
        <Col md="6">
          <div className="center-text">
            <div>
              <div className="format-small-text">
                <h6 className="text-white">
                  <span>our progress</span>
                </h6>
              </div>
              <div className="format-head-text">
                <h3 className="text-white about-font-header">calculate your BMI</h3>
              </div>
              <div className="format-sub-text">
                <p className="p-light about-para text-white">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="link-horizontal">
                <ul>
                  <li>
                    <div className="checkbox">
                      <label className="text-white center-text">
                        <input type="checkbox" value="" />
                        Metric Units
                      </label>
                    </div>
                  </li>
                  <li className="about-icon">
                    <div className="checkbox">
                      <label className="text-white center-text">
                        <input type="checkbox" value="" />
                        Imperial Units
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="link-horizontal m-t-40 m-b-40">
                <ul>
                  <li>
                    <a className="btn btn-default primary-btn transparent">Weight/Kg</a>
                  </li>
                  <li>
                    <a className="btn btn-default primary-btn transparent">Height/Cm</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-default back-white">CALCULATE</a>
            </div>
          </div>
        </Col>
        <Col lg="5" md="6" className="offset-lg-1">
          <div className="center-text">
            <table className="calculate-bmi">
              <tbody>
                <tr>
                  <td>BMI</td>
                  <td>Weight Status</td>
                </tr>
                <tr>
                  <td>Below 18.5</td>
                  <td>Underweight</td>
                </tr>
                <tr>
                  <td>18.5 - 24.9</td>
                  <td>Normal</td>
                </tr>
                <tr>
                  <td>25 - 29.9</td>
                  <td>Overweight</td>
                </tr>
                <tr>
                  <td>30 and Above</td>
                  <td>Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Calculate;
