import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/CardComponent.css';

const CardComponent = (props) => {
  return (
    <>
      <Card className='mb-5' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.url} className='ripple' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
