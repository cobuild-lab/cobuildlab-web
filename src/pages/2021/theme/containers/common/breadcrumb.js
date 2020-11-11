import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Breadcrumb = ({ list, title }) => {
  return (
    <section className="agency breadcrumb-section ">
      <Container>
        <Row>
          <Col xs="12">
            <h2 className="breadcrumb-text text-center">{title}</h2>
            <ul className="breadcrumb justify-content-center">
              {list.map((path, i) => (
                <li key={`breadcrumb-${i}`}>
                  <a href="#">{path}</a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Breadcrumb;
