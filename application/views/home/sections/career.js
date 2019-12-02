import React from 'react';
import {
  Container, Row, Col, Card, Button
} from 'react-bootstrap';

const jobs = [
  {
    title: 'CyberPolicy',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'CoverHound',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Stock IQ',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  }
];

export default () => (
  <Container>
    <h4>Software Engineering Jobs</h4>
    <Row>
      {jobs.map((job) => (
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>{job.description}</Card.Text>
              <Button variant='primary'>{job.buttonCta}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
