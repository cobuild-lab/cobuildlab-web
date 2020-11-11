import React from 'react';
import Layout from '../../containers/common/common-layout';
import Contact1Section from './contact/contact1';
import Contact2Section from './contact/contact2';

const Contact = () => (
  <Layout pathList={['elements', 'contact']} pathTitle="elements with contact">
    <Contact1Section />

    <Contact2Section />
  </Layout>
);

export default Contact;
