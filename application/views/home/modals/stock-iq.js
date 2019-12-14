import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';
import ModalImage from './image';

import startupCohort from '../images/stock-iq/500-startups-cohort.jpg';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>Stock IQ</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Stock IQ was my idea for a social website focused on stock price
        forecasting. I started the company with another software engineer and a
        designer.
      </p>
      <p>
        The core of the idea was to allow people to make predictions on
        different stock pries, and then to track the performance of their
        predictions over time, and to share with others their best and worst
        predictions.
      </p>
      <p>
        We got into a startup incubartor called 500 Startups. Here&apos;s our
        cohort:
      </p>
      <Row className='mb-4'>
        <Col md={8} className='m-auto'>
          <Card>
            <ModalImage
              height='300px'
              imageSource={startupCohort}
              captionText='500 Startups Cohort'
            />
          </Card>
        </Col>
      </Row>
      <p>
        500 Startups gave us a seed round of investment, helped us organize as C
        Corp, and gave us access to investors to pitch to. Here I am pitching
        Stock IQ at the 500 Startups Demo Day:
      </p>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <iframe
          title='Stock IQ Pitch at 500 Startups'
          width='100%'
          height='315'
          src='https://www.youtube.com/embed/CQ_bl9Ib8wM'
          frameBorder='1'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <h5>Tech Stack</h5>
      <p>Ruby on Rails, Postgresql, Heroku, Backbone.js</p>
      <h5>Looking Back</h5>
      <p>
        Looking back on the experience, I think the main reason Stock IQ failed
        is because we understimated the complexity and cost associated with
        dealing with live stock data. I thought there would be a cheap way to
        get the necessary data, and I did not originally consider issues like
        stock splits, dividends, and other complexities that affect stock prices
        on a daily basis. At the end of the day, we could not sort out the
        complexities to create a reliable product, or find a source of cheap and
        reliable stock data, which resulted in us abandoning the product after
        about 8 months of working on it.
      </p>
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
