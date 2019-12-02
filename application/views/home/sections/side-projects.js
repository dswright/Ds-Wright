import React from 'react';
import {
  Container, Row, Col, Card, Button
} from 'react-bootstrap';

const projects = [
  {
    title: 'MyNeighborsFarm',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'TierraCast Inc.',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Crypto Arbi',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  }
];

export default () => (
  <Container className='mt-4'>
    <h4 className='mt-4'>Side Projects</h4>
    <Row>
      {projects.map((job) => (
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
