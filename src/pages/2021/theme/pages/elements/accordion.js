import React from 'react';
import Layout from '../../containers/common/common-layout';
// import Faq from '../layouts/sections/modern-sass/faq';

// const AccordionElementSection = () => (
//     <Layout pathList={['elements', 'accordion']} pathTitle="elements with accordion">
//         <Faq />
//     </Layout>
// )

// export default AccordionElementSection;

import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap';
const AccordionElementSection = () => {
  const DummyContent1 = () => (
    <div className="collapse show" data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  const DummyContent2 = () => (
    <div className="collapse show" data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  const DummyContent3 = () => (
    <div className="collapse show" data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  const DummyContent4 = () => (
    <div className="collapse show" data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  return (
    <Layout pathList={['elements', 'accordion']} pathTitle="elements with accordion">
      <section className="saas1 faq pb-0">
        <Container>
          <Row>
            <Col md="8">
              <div className="faq-block">
                <div>
                  <h3 className="frequent-text">ACCORDION WITH IMAGE</h3>
                  <Accordion atomic={true}>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent1 className="active" />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent2 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent3 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent4 />
                    </AccordionItem>
                  </Accordion>
                  <h6 className="link">
                    Still have a question? Reach out to us: <a>demo@123.com</a>
                  </h6>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="faq-img-block">
                <img
                  alt="faq-person"
                  className="img-fluid"
                  src="/assets/images/saas1/faq-img.png"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="saas1 faq mt-0">
        <Container>
          <Row>
            <Col md="12">
              <div className="faq-block">
                <div>
                  <div className="title title2 title-inner">
                    <div className="main-title">
                      <h2 className="font-primary borders text-center main-text m-b-0">
                        <span className="text-uppercase">default accordion</span>
                      </h2>
                    </div>
                  </div>
                  <Accordion atomic={true}>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent1 className="active" />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent2 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent3 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent4 />
                    </AccordionItem>
                  </Accordion>
                  <h6 className="link">
                    Still have a question? Reach out to us: <a>demo@123.com</a>
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default AccordionElementSection;
