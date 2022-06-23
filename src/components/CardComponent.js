import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/CardComponent.css';

let x = false;

const CardComponent = ({ post }) => {
  return (
    <>
      <Card className='mt-3' style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src={post.url}
          style={{ height: '18rem', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title className=''>{post.title}</Card.Title>
          {x ? 'string True' : 'string False'}
          {
            if ()
          }
          <Card.Text style={{ height: '3rem', overflow: 'hidden' }}>
            {post.text}
          </Card.Text>
          <Button href={post.link} variant='primary' target='_blank'>
            Go to image
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
