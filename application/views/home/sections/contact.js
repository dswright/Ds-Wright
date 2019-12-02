import React from 'react';
import {
  Container, Row, Col, Card, Button
} from 'react-bootstrap';

const contacts = [
  {
    title: 'LinkedIn',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Facebook',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Email Me',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Contact Me',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  }
];

export default () => (
  <Container>
    <h4 id='contact' className='mt-4'>
      Contact Me
    </h4>
    <Row>
      {contacts.map((job) => (
        <Col md={3}>
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
