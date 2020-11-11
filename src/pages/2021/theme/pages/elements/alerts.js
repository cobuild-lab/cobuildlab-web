import React from 'react';
import Layout from '../../containers/common/common-layout';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
const Alerts = () => (
  <Layout pathList={['elements', 'alert']} pathTitle="elements with alert">
    <section className="alert-section">
      <Container>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h3 className="card-head">basic Alerts</h3>
              </CardHeader>
              <CardBody>
                <div className="alert alert-primary dark" role="alert">
                  This is a info alert—check it out!
                </div>
                <div className="alert alert-secondary dark" role="alert">
                  This is a light alert—check it out!
                </div>
                <div className="alert alert-success dark" role="alert">
                  This is a success alert—check it out!
                </div>
                <div className="alert alert-info dark" role="alert">
                  This is a danger alert—check it out!
                </div>
                <div className="alert alert-warning dark" role="alert">
                  This is a secondary alert—check it out!
                </div>
                <div className="alert alert-danger dark" role="alert">
                  This is a warning alert—check it out!
                </div>
                <div className="alert alert-dark dark mb-0" role="alert">
                  This is a dark alert—check it out!
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="card-head">link Alerts</h3>
              </CardHeader>
              <CardBody>
                <div className="alert alert-primary dark" role="alert">
                  <a href="#">This is a info alert—check it out!</a>
                </div>
                <div className="alert alert-secondary dark" role="alert">
                  <a href="#">This is a info alert—check it out!</a>
                </div>
                <div className="alert alert-success dark" role="alert">
                  <a href="#">This is a info alert—check it out!</a>
                </div>
                <div className="alert alert-info dark" role="alert">
                  <a href="#">This is a info alert—check it out!</a>
                </div>
                <div className="alert alert-warning dark" role="alert">
                  <a href="#">This is a info alert—check it out!</a>
                </div>
                <div className="alert alert-danger dark" role="alert">
                  <a href="#">This is a info alert—check it out!</a>
                </div>
                <div className="alert alert-dark dark mb-0" role="alert">
                  <a href="#">This is a info alert—check it out!</a>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="card-head">outline Alerts</h3>
              </CardHeader>
              <CardBody>
                <div className="alert alert-primary dark outline" role="alert">
                  This is a info alert—check it out!
                </div>
                <div className="alert alert-secondary dark outline" role="alert">
                  This is a light alert—check it out!
                </div>
                <div className="alert alert-success dark outline" role="alert">
                  This is a success alert—check it out!
                </div>
                <div className="alert alert-info dark outline" role="alert">
                  This is a danger alert—check it out!
                </div>
                <div className="alert alert-warning dark outline" role="alert">
                  This is a secondary alert—check it out!
                </div>
                <div className="alert alert-danger dark outline" role="alert">
                  This is a warning alert—check it out!
                </div>
                <div className="alert alert-dark dark outline mb-0" role="alert">
                  This is a dark alert—check it out!
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="card-head">dismissing Alerts</h3>
              </CardHeader>
              <CardBody>
                <div className="alert alert-primary dark alert-dismissible fade show" role="alert">
                  You can check in on some of those fields below.
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-secondary dark alert-dismissible fade show"
                  role="alert">
                  You can check in on some of those fields below.
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="alert alert-success dark alert-dismissible fade show" role="alert">
                  {' '}
                  You can check in on some of those fields below.
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="alert alert-info dark alert-dismissible fade show" role="alert">
                  {' '}
                  You can check in on some of those fields below.
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="alert alert-warning dark alert-dismissible fade show" role="alert">
                  You can check in on some of those fields below.
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="alert alert-danger dark alert-dismissible fade show" role="alert">
                  {' '}
                  You can check in on some of those fields below.
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-dark dark alert-dismissible fade show mb-0"
                  role="alert">
                  {' '}
                  You can check in on some of those fields below.
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </CardBody>
            </Card>
            <div className="card mb-0">
              <CardHeader>
                <h3 className="card-head">dismissing Alerts</h3>
              </CardHeader>
              <CardBody>
                <div className="alert alert-primary dark " role="alert">
                  <i aria-hidden="true" className="fa fa-heart-o m-r-10"></i>You can check in on
                  some of those fields below.
                </div>
                <div className="alert alert-secondary dark" role="alert">
                  <i aria-hidden="true" className="fa fa-heart-o m-r-10"></i> You can check in on
                  some of those fields below.
                </div>
                <div className="alert alert-success dark" role="alert">
                  <i aria-hidden="true" className="fa fa-heart-o m-r-10"></i>You can check in on
                  some of those fields below.
                </div>
                <div className="alert alert-info dark" role="alert">
                  <i aria-hidden="true" className="fa fa-heart-o m-r-10"></i> You can check in on
                  some of those fields below.
                </div>
                <div className="alert alert-warning dark" role="alert">
                  <i aria-hidden="true" className="fa fa-heart-o m-r-10"></i>You can check in on
                  some of those fields below.
                </div>
                <div className="alert alert-danger dark" role="alert">
                  <i aria-hidden="true" className="fa fa-heart-o m-r-10"></i>You can check in on
                  some of those fields below.
                </div>
                <div className="alert alert-dark dark mb-0">
                  <i aria-hidden="true" className="fa fa-heart-o m-r-10"></i> You can check in on
                  some of those fields below.
                </div>
              </CardBody>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);

export default Alerts;
