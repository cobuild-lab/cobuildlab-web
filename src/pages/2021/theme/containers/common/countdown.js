import React, { Fragment, useState, useEffect } from 'react';
import Countdown from 'react-countdown-now';

const CountdownComponent = (props) => {
  const [style, setStyle] = useState();

  useEffect(() => {
    setTimeout(
      function() {
        setStyle({ style: { display: 'none' } });
      }.bind(this),
      1000,
    );
  }, []);
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="countdown">
          <ul>
            <li>
              <div className="event-counter">
                <h2>
                  <span id="days" className="time digits">
                    {days}
                  </span>
                  <span className="title">days</span>
                </h2>
                <div className="set-border-left"></div>
                <div className="set-border-bottom"></div>
              </div>
            </li>
            <li>
              <div className="event-counter">
                <h2>
                  <span id="hours" className="time digits">
                    {hours}
                  </span>
                  <span className="title">hours</span>
                </h2>
                <div className="set-border-left"></div>
                <div className="set-border-bottom"></div>
              </div>
            </li>
            <li>
              <div className="event-counter">
                <h2>
                  <span id="minutes" className="time digits">
                    {minutes}
                  </span>
                  <span className="title">minutes</span>
                </h2>
                <div className="set-border-left"></div>
                <div className="set-border-bottom"></div>
              </div>
            </li>
            <li>
              <div className="event-counter">
                <h2>
                  <span id="seconds" className="time digits">
                    {seconds}
                  </span>
                  <span className="title">seconds</span>
                </h2>
                <div className="set-border-left"></div>
                <div className="set-border-bottom"></div>
              </div>
            </li>
          </ul>
        </div>
      );
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 10).getTime();

  return (
    <Fragment>
      <Countdown date={coundown} renderer={renderer} />
    </Fragment>
  );
};

export default CountdownComponent;
