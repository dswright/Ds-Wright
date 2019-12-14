import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';
import ModalImage from './image';

import serverSideRendering from '../images/cyberpolicy/server-side-render.png';
import floorDemoUpstairs from '../images/cyberpolicy/javascript-bundle-chunking.png';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>CyberPolicy.com</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Two of the products I worked on for CyberPolicy were CyberPolicy
        Complete and CyberPolicy CheckUp (Frontend Only)
      </p>
      <h4>CyberPolicy Complete</h4>
      <p>
        Cyber Complete was the original CyberPolicy product. Fundamentally, its
        a 4 page form flow which ends with the customer getting quotes from
        different cyber insurance carriers, and allows them to buy a policy
        online directly through CyberPolicy.com.
      </p>
      <h5>CyberPolicy Complete Demo Video</h5>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <iframe
          title='Youtube CyberPolicy Complete'
          width='100%'
          height='315'
          src='https://www.youtube.com/embed/IRR0yF8JYwQ'
          frameBorder='1'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <h5>CyberPolicy Stack Overview</h5>
      <p>
        The flow is built with React, Redux, React Router, React on Rails,
        Webpack, and Ruby on Rails.
      </p>
      <h5>Technical Features</h5>
      For CyberPolicy, I implemented 2 extra features for improved performance
      and SEO:
      <ul className='mt-3 mb-3'>
        <li>
          <b>JavaScript Bundle Chunking</b>
          &nbsp;- No need to load the javascript for the entire app on each
          page. Only load the JavaScript files that are necessary for each page.
        </li>
        <li>
          <b>Server-side Rendering</b>
          &nbsp;- The app is written in React, but it is fully rendered from the
          server on the intial page load. The page loads faster, and is more
          easily crawled by search engines.
        </li>
      </ul>
      <Row className='mb-4'>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              height='40px'
              imageSource={floorDemoUpstairs}
              captionText='Bundle Chunking'
            />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <ModalImage
              imageSource={serverSideRendering}
              captionText='Server-side Rendering'
            />
          </Card>
        </Col>
      </Row>
      <h4>CyberPolicy CheckUp</h4>
      <p>
        CyberPolicy CheckUp was the second major app that I built on
        CyberPolicy.com. This product was a 15 question form flow, which ends
        with the user on a dashboard where they can view various Cyber
        Protection recommendations for their small business, and also continue
        through to buying Cyber Insurance.
      </p>
      <p>
        The main feature that I like about the CyberCheckUp app is the animated
        routes. Instead of seeing a full page refresh on each button press, the
        page slides to the next question. It gives the feeling that you are not
        leaving the page at all, but the URL of the page is actually changing
        along with each animated transition, allowing the user to keep their
        spot if they need to refresh the page or come back later.
      </p>
      <p>
        I learned a lot about using React Router to integrate routing with
        animation on this project, and I really like how it turned out.
      </p>
      <h5 className='mb-3'>CyberPolicy CheckUp Demo Video</h5>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <iframe
          title='Youtube CyberPolicy CheckUp'
          width='100%'
          height='315'
          src='https://www.youtube.com/embed/xRC2c4rDYKQ'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <a
        className='btn btn-success d-block'
        href='https://cyberpolicy.com'
        role='button'
        style={{ maxWidth: '250px', margin: '15px auto' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        Visit CyberPolicy.com
      </a>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant='primary'
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </Button>
    </Modal.Footer>
  </Fragment>
);
