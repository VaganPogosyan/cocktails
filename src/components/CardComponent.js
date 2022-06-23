import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/CardComponent.css';

// function handleTextClick() {
//   setTextHidden(!textHidden);
// }

const CardComponent = ({ post }) => {
  const [textHidden, setTextHidden] = useState(true);

  const more = '...more';

  function handleTextClick() {
    setTextHidden(!textHidden);
    console.log(textHidden);
  }

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
          <Card.Text
            onClick={() => handleTextClick()}
            style={textHidden ? { height: '3rem', overflow: 'hidden' } : null}
          >
            {post.text}{' '}
            <span className='text-secondary' style={{ cursor: 'pointer' }}>
              {more}
            </span>
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
