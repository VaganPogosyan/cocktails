import React from 'react';
import CardComponent from './CardComponent';

const images = [
  'https://images.unsplash.com/photo-1655826524791-85c778336fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1655803395812-ee6271463c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
];

const ContainerComponent = () => {
  return (
    <>
      {images.map((url) => {
        return <CardComponent url={url} key={url} />;
      })}
    </>
  );
};

export default ContainerComponent;
