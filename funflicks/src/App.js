import React from 'react';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Tvseries from './Pages/Tvseries/Tvseries';
import Search from './Pages/Search/Search';
import { Container } from '@mui/material';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Tvseries" element={<Tvseries />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
        
        </Container>
      </div>
      
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
};

export default App;
