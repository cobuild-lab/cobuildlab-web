import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import Custom Components
import Layout from '../../containers/common/common-layout';

const Typography = () => (
  <Layout pathList={['pages', 'typography']} pathTitle="pages with typography">
    <section className="agency typography_section">
      <Container>
        <Row>
          <Col lg="6">
            <div className="typography-box">
              <div className="headings">
                <h3>headings</h3>
                <span>
                  All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are
                  available.
                </span>
              </div>
              <div className="typo-content heading_content">
                <h1>h1 heading</h1>
                <h2>h2 heading</h2>
                <h3>h3 heading</h3>
                <h4>h4 heading</h4>
                <h5>h5 heading</h5>
                <h6>h6 heading</h6>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>Text Color</h3>
                <span>You can Give text color by using txt-* class</span>
              </div>
              <div className="typo-content product-pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <a aria-label="Previous" className="page-link" href="#">
                      <span aria-hidden="true">
                        <i aria-hidden="true" className="fa fa-chevron-left"></i>
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a aria-label="Next" className="page-link" href="#">
                      <span aria-hidden="true">
                        <i aria-hidden="true" className="fa fa-chevron-right"></i>
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>Alignment</h3>
                <span>
                  Use text utilities as needed to change the alignment of your blockquote.
                </span>
              </div>
              <div className="typo-content">
                <p className="text-left">This is a left aligned text .text-left</p>
                <p className="text-center">This is a center aligned text .text-center</p>
                <p className="text-right">This is a right aligned text .text-right</p>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>Naming a source</h3>
                <span>
                  Add a{' '}
                  <code className="highlighter-rouge">
                    &lt;footer className="blockquote-footer"&gt;
                  </code>{' '}
                  for identifying the source. Wrap the name of the source work in{' '}
                  <code className="highlighter-rouge">&lt;cite&gt;</code>.
                </span>
              </div>
              <div className="typo-content">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.
                  </p>
                  <div className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>lists</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div className="typo-content lists">
                <Row>
                  <Col sm="6">
                    <h6 className="sub-title">Unorder list</h6>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </Col>
                  <Col sm="6">
                    <h6 className="sub-title">order list</h6>
                    <ol>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ol>
                  </Col>
                  <Col sm="6">
                    <h6 className="sub-title">order list</h6>
                    <dl className="m-0">
                      <dt>Lorem ipsum dolor sit amet</dt>
                      <dd>- ipsum dolor sit amet</dd>
                      <dt>Lorem ipsum dolor sit amet</dt>
                      <dd>- ipsum dolor sit amet</dd>
                      <dt>Lorem ipsum dolor sit amet</dt>
                      <dd>- ipsum dolor sit amet</dd>
                    </dl>
                  </Col>
                  <Col sm="6">
                    <h6 className="sub-title">order list</h6>
                    <ul className="m-0">
                      <li>
                        <i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>buttons</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div className="typo-content typo-buttons">
                <a className="btn btn-default primary-btn mr-3" href="#">
                  button
                </a>
                <a className="btn btn-default btn-gradient mr-3" href="#">
                  button
                </a>
                <a className="btn btn btn-default primary-btn radius-0 mr-3" href="#">
                  button
                </a>
                <a className="btn btn-default back-white" href="#">
                  button
                </a>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="typography-box">
              <div className="headings">
                <h3>Text Color</h3>
                <span>You can Give text color by using txt-* class</span>
              </div>
              <div className="typo-content">
                <p className="text-primary">
                  This is Primary text You can archive this adding
                  <code>.text-primary</code> class
                </p>
                <p className="text-secondary">
                  This is Secondary text You can archive this adding <code>.text-secondary</code>
                  class
                </p>
                <p className="text-success">
                  This is Success text You can archive this adding
                  <code>.text-success</code> class
                </p>
                <p className="text-info">
                  This is Info text You can archive this adding <code>.text-info</code> class
                </p>
                <p className="text-warning">
                  This is Warning text You can archive this adding
                  <code>.text-warning</code> class
                </p>
                <p className="text-danger">
                  This is Danger text You can archive this adding <code>.text-danger</code>
                  class
                </p>
                <p className="text-dark">
                  This is Dark text You can archive this adding <code>.text-dark</code> class
                </p>
                <p className="text-muted">
                  This is Primary text You can archive this adding <code>.text-muted</code>
                  class
                </p>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>Form</h3>
              </div>
              <div className="typo-content">
                <form>
                  <div className="form-row">
                    <div className="col-12 mb-3">
                      <label htmlFor="name">First Name</label>
                      <input
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Write Your Message</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Write Your Message"
                        rows="5"></textarea>
                    </div>
                  </div>
                  <Row></Row>
                </form>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>Inline text elements</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div className="typo-content">
                <p>
                  You can use the mark tag to
                  <mark>highlight</mark>
                  text.
                </p>
                <p>
                  <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p>
                  <s>This line of text is meant to be treated as no longer accurate.</s>
                </p>
                <p>
                  <ins>
                    This line of text is meant to be treated as an addition to the document.
                  </ins>
                </p>
                <p>
                  <u>This line of text will render as underlined</u>
                </p>
                <p>
                  <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>lists</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div className="typo-content input_button">
                <Row>
                  <Col sm="6">
                    <form>
                      <div>
                        <input id="one" name="gender" type="radio" value="male" />
                        <label htmlFor="one">radio button1</label>
                      </div>
                      <div>
                        <input id="two" name="gender" type="radio" value="male" />
                        <label htmlFor="two">radio button2</label>
                      </div>
                      <div>
                        <input id="three" name="gender" type="radio" value="male" />
                        <label htmlFor="three">radio button3</label>
                      </div>
                      <div>
                        <input id="four" name="gender" type="radio" value="male" />
                        <label htmlFor="four">radio button4</label>
                      </div>
                    </form>
                  </Col>
                  <Col sm="6">
                    <form>
                      <div>
                        <input id="six" name="gender" type="checkbox" value="male" />
                        <label htmlFor="six">checkbox button1</label>
                      </div>
                      <div>
                        <input id="seven" name="gender" type="checkbox" value="male" />
                        <label htmlFor="seven">checkbox button2</label>
                      </div>
                      <div>
                        <input id="eight" name="gender" type="checkbox" value="male" />
                        <label htmlFor="eight">checkbox button3</label>
                      </div>
                      <div>
                        <input id="nine" name="gender" type="checkbox" value="male" />
                        <label htmlFor="nine">checkbox button4</label>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="typography-box">
              <div className="headings">
                <h3>social icons</h3>
              </div>
              <div className="typo-content">
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-google center-content"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);

export default Typography;
