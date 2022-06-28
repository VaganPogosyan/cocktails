import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export const SearchBar = () => {
  const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;

  const [data, setData] = useState({ data: {} });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      const person = data.results[0];
      console.log(person.name);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Form style={{ width: '40rem' }}>
        <Form.Group className='my-3' controlId='formBasicEmail'>
          <Form.Label>
            <h2>Search cocktail</h2>
          </Form.Label>
          <Form.Control type='text' placeholder='Search cocktail...' />
        </Form.Group>
        <Button type='submit'>Search</Button>
      </Form>
      <div></div>
    </Container>
  );
};
