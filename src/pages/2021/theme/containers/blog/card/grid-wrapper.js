import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CardGridWrapper = ({ className, image, blogDate, place, title, description, readUrl }) => {
  const MAX_LENGTH = 130;

  return (
    <div className={className}>
      <div className="blog-agency">
        <div className="blog-contain">
          <img alt="" className="img-fluid" src={image} />
          <div className="img-container">
            <div>
              <div className="blog-info">
                <div className="m-b-20">
                  <div className="center-text">
                    {blogDate && (
                      <>
                        <i aria-hidden="true" className="fa fa-clock-o m-r-10"></i>
                        <h6 className="m-r-25 font-blog">{blogDate}</h6>{' '}
                      </>
                    )}
                    {place && (
                      <>
                        <i aria-hidden="true" className="fa fa-map-marker m-r-10"></i>
                        <h6 className="font-blog">{place}</h6>{' '}
                      </>
                    )}
                  </div>
                </div>
                <h5 className="blog-head font-600">{title}</h5>
                {description.length > MAX_LENGTH ? (
                  <p className="para2">{`${description.substring(0, MAX_LENGTH)} .....`}</p>
                ) : (
                  <p className="para2">{description}</p>
                )}

                <div className="btn-bottom m-t-20">
                  <Link href={readUrl}>
                    <a>read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardGridWrapper.propTypes = {
  className: PropTypes.string.isRequired,

  image: PropTypes.string.isRequired,

  blogDate: PropTypes.string,

  place: PropTypes.string,

  title: PropTypes.string.isRequired,

  description: PropTypes.string.isRequired,

  readUrl: PropTypes.string.isRequired,
};

export default CardGridWrapper;
