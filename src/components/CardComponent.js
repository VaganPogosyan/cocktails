import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardComponent = (props) => {
  return (
    <>
      <Card style={{ width: '30%' }}>
        <Card.Img variant='top' src={props.url} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
      ;
    </>
  );
};

export default CardComponent;
