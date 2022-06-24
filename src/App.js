import React from 'react';
import Header from './components/Header';
import ContainerComponent from './components/ContainerComponent';
import { LinkComponent } from './components/LinkComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/home' element={<ContainerComponent />}></Route>
          <Route path='/link' element={<LinkComponent />}></Route>
        </Routes>
      </Router>
      {/* <ContainerComponent /> */}
    </>
  );
}

export default App;
