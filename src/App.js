import React from 'react';
import Header from './components/Header';
import ContainerComponent from './components/ContainerComponent';
// import { LinkComponent } from './components/LinkComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/home' element={<ContainerComponent />}></Route>
          <Route path='/search' element={<SearchBar />}></Route>
        </Routes>
      </Router>
      {/* <ContainerComponent /> */}
    </>
  );
}

export default App;
