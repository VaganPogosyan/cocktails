import React from 'react';
import CardComponent from './CardComponent';
import '../css/ContainerComponent.css';
import { Container } from 'react-bootstrap';

const images = [
  'https://images.unsplash.com/photo-1655826524791-85c778336fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1655803395812-ee6271463c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
  'https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  'https://images.unsplash.com/photo-1655819132317-78f38b5baf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  'https://images.unsplash.com/photo-1655743851335-7770b475e05a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
];

const posts = [
  {
    url: 'https://images.unsplash.com/photo-1655826524791-85c778336fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    title: 'Iphone',
    text: 'A picture of an Iphone taking a picture A picture of an Iphone taking a picture A picture of an Iphone taking a picture A picture of an Iphone taking a picture A picture of an Iphone taking a picture A picture of an Iphone taking a picture  ',
    link: 'https://images.unsplash.com/photo-1655826524791-85c778336fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'Desk',
    text: 'A picture of a working desk',
    link: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1655803395812-ee6271463c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
    title: 'Car',
    text: 'A picture of a carA picture of a carA picture of a carA picture of a carA picture of a carA picture of a carA picture of a carA picture of a carA picture of a carA picture of a carA picture of a carA picture of a car',
    link: 'https://images.unsplash.com/photo-1655803395812-ee6271463c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: '3D Room',
    text: 'A picture of a 3D room',
    link: 'https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
];

const ContainerComponent = () => {
  return (
    <Container className='container'>
      <div className='row'>
        {posts.map((post) => {
          return (
            <div className='col'>
              <CardComponent post={post} key={posts.url} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ContainerComponent;
