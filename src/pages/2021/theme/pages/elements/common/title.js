import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
const Title = ({ heading }) => {
  return (
    <Fragment>
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center main-text m-b-0 text-uppercase">
                <span>{heading}</span>
              </h2>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Title;
