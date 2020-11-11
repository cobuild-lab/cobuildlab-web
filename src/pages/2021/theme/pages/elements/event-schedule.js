import React from 'react';
import Layout from '../../containers/common/common-layout';
import Event1 from './event-schedule/event1';
import Event2 from './event-schedule/event2';

const EventSchedule = () => (
  <Layout pathList={['elements', 'event schedule']} pathTitle="elements with event-schedule">
    <Event1 />

    <Event2 />
  </Layout>
);

export default EventSchedule;
