import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/CardComponent.css';

// function handleTextClick() {
//   setTextHidden(!textHidden);
// }

const CardComponent = ({ post }) => {
  const [textHidden, setTextHidden] = useState(true);

  const more = '... more';
  const less = ' ...less';

  function handleTextClick() {
    setTextHidden(!textHidden);
  }

  const shortText = post.text.slice(0, 30);

  // useEffect(() => {
  //   console.log('hello');
  // }, [textHidden]);

  return (
    <>
      <Card className='mt-3' style={{ width: '20rem' }}>
        <Card.Img
          variant='top'
          src={post.url}
          style={{ height: '18rem', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title className=''>{post.title}</Card.Title>
          <Card.Text
            style={
              textHidden
                ? { height: '1.5rem', overflow: 'hidden' }
                : { overflow: 'scroll' }
            }
          >
            {post.text.length > 30 && textHidden ? shortText : post.text}
            {post.text.length > 30 ? (
              <span
                onClick={() => handleTextClick()}
                className='text-secondary'
                style={{ cursor: 'pointer' }}
              >
                {textHidden ? more : less}
              </span>
            ) : null}
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
