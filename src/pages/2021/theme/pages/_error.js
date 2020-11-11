import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
const Error = ({ statusCode }) => {
  const isErrorPage = true;

  useEffect(() => {
    document.body.style.setProperty('--primary', '#000000');
    document.body.style.setProperty('--secondary', '#434345');
    document.body.style.setProperty('--light', '#252525');
    document.body.style.setProperty('--dark', '#000000');
  });

  return (
    <div className="bg-purple">
      <div className="section-404">
        <div className="stars">
          <Container>
            <Row>
              <Col lg="8" xs="12" className="offset-lg-2">
                <div className="central-body">
                  <h1 className="text-inner">{statusCode ? statusCode : '404'}</h1>
                  <h3 className="sub-text text-white">page not found</h3>
                  <p className="text-404 text-white text-center">
                    The Page You Are Attempting To Reach Is Currently Not Available. This May Be
                    Because The Page Does Not Exist Or Has Been Moved.
                  </p>
                  <Link href="/layouts/app1">
                    <a className="btn btn-default m-t-20">back to home</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="objects">
          <img alt="object_rocket" className="object_rocket" src="/assets/images/404/rocket.svg" />
          <div className="earth-moon">
            <img alt="object_earth" className="object_earth" src="/assets/images/404/earth.svg" />
            <img alt="object_moon" className="object_moon" src="/assets/images/404/moon.svg" />
          </div>
          <div className="box_astronaut">
            <img
              alt="object_astronaut"
              className="object_astronaut"
              src="/assets/images/404/astronaut.svg"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </div>
  );
};

export default Error;

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};
