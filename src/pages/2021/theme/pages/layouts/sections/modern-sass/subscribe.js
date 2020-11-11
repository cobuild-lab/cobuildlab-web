import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Subscribe = () => (
  <section className="saas1 subscribe" id="contact">
    <Container>
      <Row>
        <Col lg="7">
          <div className="media">
            <img alt="profile" src="/assets/images/saas1/subscribe-icon.png" />
            <div className="media-body">
              <h3 className="mt-0 text-white">Start 30 days free trial</h3>
              <h6 className="text-white">
                Our users are impatient. They're probably distracted too. Keep it simple and
                beautiful, fun and functional.
              </h6>
            </div>
          </div>
        </Col>
        <Col lg="5">
          <div className="subscribe-input">
            <form>
              <input id="useremail" placeholder="This Field is Required" required type="email" />
              <input id="submit" type="submit" value="Get Started" />
            </form>
            <div className="text text-center d-flex">
              <h6 className="text-white">Free 30-day trial</h6>
              <h6 className="text-white">Easy setup</h6>
              <h6 className="text-white">Cancel any time</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Subscribe;
