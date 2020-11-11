import React, { useState } from 'react';
import Slider from 'react-slick';
import { Col, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
  ],
};

const ImageWrapper = () => (
  <div className="blog-block">
    <div className="blog-box">
      <div className="overflow-hidden">
        <img
          alt="blog"
          className="img-fluid blur-up lazyload "
          src="/assets/images/agency/blog/20.jpg"
        />
      </div>
    </div>
  </div>
);

const GalleryWrapper = () => (
  <Slider {...settings}>
    <div className="item">
      <div className="border-portfolio">
        <a
          className="zoom_gallery"
          data-source="http://500px.com/photo/32736307"
          href="/assets/images/agency/blog/12.jpg"
          title="Into The Blue">
          <img
            alt=""
            className="img-fluid blur-up lazyload "
            src="/assets/images/agency/blog/12.jpg"
          />
        </a>
      </div>
    </div>
    <div className="item">
      <div className="border-portfolio">
        <a
          className="zoom_gallery"
          data-source="http://500px.com/photo/32554131"
          href="/assets/images/agency/blog/10.jpg">
          <img
            alt=""
            className="img-fluid blur-up lazyload "
            src="/assets/images/agency/blog/10.jpg"
          />
        </a>
      </div>
    </div>
  </Slider>
);

const VideoWrapper = () => {
  const [modal, setModal] = useState();
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <Col md="12" className="m-b-50 p-0">
      <div className="video w-100">
        <a className="button center-content" onClick={toggle}>
          <img
            alt="video"
            className="img-fluid"
            src="/assets/images/saas1/testimonial-video-icon.png"
          />
        </a>
      </div>
      <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
        <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
        <ModalBody className="iframe-modal">
          <iframe
            className="mfp-iframe"
            frameBorder="0"
            allowFullScreen=""
            src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
        </ModalBody>
      </Modal>
    </Col>
  );
};

const DetailWrapper = ({ className, showcaseType }) => {
  const Showcase = () => {
    switch (showcaseType) {
    case 'Image':
      return <ImageWrapper />;
    case 'Gallery':
      return <GalleryWrapper />;
    case 'Video':
      return <VideoWrapper />;
    default:
      return <ImageWrapper />;
    }
  };

  return (
    <div className={className}>
      {Showcase()}

      <div className="blog-text m-t-20">
        <h6>July, 24th 2019</h6>
        <a href="#">
          <h3 className="blog-head">Sandford Stadium Improvements</h3>
        </a>
        <div className="blog-divider"></div>
        <div className="blog-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h5>Mark jkcno</h5>
          <h5 className="pull-right">
            10<i className="fa fa-heart-o ml-1"></i>, 50<i className="fa fa-comments-o ml-1"></i>
          </h5>
        </div>
      </div>
      {/* <!-- Comment Sec Start --> */}

      <h3 className="page-header-comment">Comments :</h3>
      <div className="comment-list blog_comment">
        <div className="comment_sec">
          <article className="row">
            <Col xs="12">
              <div className="blog_center">
                <div>
                  <figure className="thumbnail">
                    <img alt="" src="/assets/images/app_landing2/team/1.png" />
                  </figure>
                </div>
                <div className="blog_user arrow left">
                  <div className="panel-body">
                    <div className="text-left">
                      <div className="comment-user">
                        <i className="fa fa-user"></i>
                        <h6>That Guy</h6>
                      </div>
                      <div className="comment-date">
                        <i className="fa fa-clock-o"></i>
                        <h6> Dec 16, 2014 </h6>
                      </div>
                    </div>
                    <div className="comment-post">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                    <a className="link-btn" href="#">
                      <i className="fa fa-reply pr-2"></i>reply
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </article>
          {/* <!--Comment Sec Start--> */}
          <article className="row">
            <Col xs="11" className="offset-1">
              <div className="blog_center re_comment">
                <div>
                  <figure className="thumbnail">
                    <img alt="" src="/assets/images/app_landing2/team/2.png" />
                  </figure>
                </div>
                <div className="blog_user arrow left">
                  <div className="panel-body">
                    <div className="text-left">
                      <div className="comment-user">
                        <i className="fa fa-user"></i>
                        <h6> That Guy </h6>
                      </div>
                      <div className="comment-date">
                        <i className="fa fa-clock-o"></i>
                        <h6> Dec 16, 2014</h6>
                      </div>
                    </div>
                    <div className="comment-post">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                    </div>
                    <a className="link-btn" href="#">
                      <i className="fa fa-reply pr-2"></i>reply
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </article>
          {/* <!--Comment Sec End--> */}
        </div>
        <div className="comment_sec">
          <article className="row">
            <Col xs="12">
              <div className="blog_center">
                <div>
                  <figure className="thumbnail">
                    <img alt="" src="/assets/images/app_landing2/team/3.png" />
                  </figure>
                </div>
                <div className="blog_user arrow left">
                  <div className="panel-body">
                    <div className="text-left">
                      <div className="comment-user">
                        <i className="fa fa-user"></i>
                        <h6> That Guy </h6>
                      </div>
                      <div className="comment-date">
                        <i className="fa fa-clock-o"></i>
                        <h6> Dec 16, 2014</h6>
                      </div>
                    </div>
                    <div className="comment-post">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                    <a className="link-btn" href="#">
                      <i className="fa fa-reply pr-2"></i>reply
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </article>
        </div>
        <div className="comment_sec">
          <article className="row">
            <Col xs="12">
              <div className="blog_center">
                <div>
                  <figure className="thumbnail">
                    <img alt="" src="/assets/images/app_landing2/team/4.png" />
                  </figure>
                </div>
                <div className="blog_user arrow left">
                  <div className="panel-body">
                    <div className="text-left">
                      <div className="comment-user">
                        <i className="fa fa-user"></i>
                        <h6> That Guy </h6>
                      </div>
                      <div className="comment-date">
                        <i className="fa fa-clock-o"></i>
                        <h6> Dec 16, 2014</h6>
                      </div>
                    </div>
                    <div className="comment-post">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                    <a className="link-btn" href="#">
                      <i className="fa fa-reply pr-2"></i>reply
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </article>
        </div>
      </div>
      {/* <!-- Comment Sec End --> */}
      <div className="quote_2 comment_form_sec">
        <div className="container">
          <div className="row">
            <Col xs="12" className="quote_form">
              <hr />
              <h3 className="page-header-comment mb-4">Leave you comment :</h3>
              <Form>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label>Name :</Label>
                    <Input
                      className="form-control"
                      placeholder="Enter Your Name"
                      required=""
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Label htmlFor="inputEmail4">Email :</Label>
                    <Input
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter Your Email"
                      required=""
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-12">
                    <Label htmlFor="exampleTextarea">Message :</Label>
                    <textarea
                      className="form-control msg_coment"
                      id="exampleTextarea"
                      placeholder="Leave a Comment"
                      required=""
                      rows="3"></textarea>
                  </FormGroup>
                </div>
                <a className="btn btn-default primary-btn m-t-20 radius-0" href="#">
                  Post Comment
                  <span className="con_btn_eff"></span>
                </a>
              </Form>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailWrapper;
