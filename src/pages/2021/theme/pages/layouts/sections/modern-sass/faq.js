import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap';
const Faq = () => {
  const DummyContent1 = () => (
    <div
      className="collapse show"
      id="collapseicon"
      aria-labelledby="collapseicon"
      data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  const DummyContent2 = () => (
    <div
      className="collapse show"
      id="collapseicon1"
      aria-labelledby="collapseicon1"
      data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  const DummyContent3 = () => (
    <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  const DummyContent4 = () => (
    <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
      <div className="card-body">
        No one cares about products. People care about ideas. Is a product an idea? Noup. Is a
        brand? A good one is. No one cares about products. People care about ideas. Is a product an
        idea? Noup. Is a brand? A good one is.
      </div>
    </div>
  );
  return (
    <section className="saas1 faq" id="faq">
      <Container>
        <Row>
          <Col md="8">
            <div className="faq-block">
              <div>
                <h3 className="frequent-text">Frequently Asked Questions</h3>
                <h6>
                  Our users are impatient. They're probably distracted too. Keep it simple and
                  beautiful, fun and functional. Clean aesthetics supported by a strong concept is
                  what we stand for.
                </h6>
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
              <img alt="faq-person" className="img-fluid" src="/assets/images/saas1/faq-img.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
