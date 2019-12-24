import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>CoverHound.com</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        The primary product I worked on for CoverHound.com was the Commercial
        Insurance product.
      </p>
      <p />
      <p>
        In my opinion, the most interesting part of the CoverHound Commercial
        Insurance app is how the form questions are dynamically rendered based
        on the user&apos; answers to previous questions. Depending on the
        products the user selects, the user&apos;s physical location, and their
        business type, the question list will change. The goal is to require the
        least number of questions possible, but the challenge is that there are
        thousands of different possible question sets. Building the architecture
        for this flow was challenging, but enjoyable, and I learned a lot in the
        process.
      </p>
      <h5>Complete CoverHound Business Insurance Demo</h5>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <iframe
          title='CoverHound Commercial Insurance Flow'
          width='100%'
          height='315'
          src='https://www.youtube.com/embed/c2nAcp6aPl4'
          frameBorder='1'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <a
        className='btn btn-success d-block'
        href='https://coverhound.com/business-insurance'
        role='button'
        style={{ maxWidth: '300px', margin: '15px auto' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        Visit CoverHound.com/business
      </a>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant='light'
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </Button>
    </Modal.Footer>
  </Fragment>
);
