import React, { useEffect } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap';
const AccordionSection = () => {
  useEffect(() => {
    document.querySelector('.accordion .accordion-item').classList.add('active');
    return () => {
      document.querySelector('.accordion .accordion-item').classList.remove('active');
    };
  }, []);

  const DummyContent1 = () => (
    <p>
      No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand?
      A good one is. No one cares about products. People care about ideas. Is a product an idea?
      Noup.No one cares about products. People care about ideas. Is a product an idea? Noup.
    </p>
  );

  return (
    <section className="saas1 faq testimonial-bg inner-container">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title title2 title-inner">
              <div className="main-title">
                <h2 className="font-primary borders text-center main-text m-b-0">
                  <span className="text-uppercase">accordion with image</span>
                </h2>
              </div>
            </div>
          </Col>
          <Col md="8">
            <div className="faq-block">
              <div className="w-100">
                <div className="accordion faq m-0" id="accordionExample11">
                  <Accordion atomic={true}>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="faq-img-block">
              <img
                alt="faq-person"
                className="img-fluid"
                src="../assets/images/saas1/faq-img.png"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AccordionSection;
