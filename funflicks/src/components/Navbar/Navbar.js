import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const bottomNavStyle = {
  width: '100%',
  position: 'fixed',
  bottom: 0,
  backgroundColor: '#2d313a',
  zIndex: 100,
};

const bottomNavActionStyle = {
  color: 'white',
};

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate('/');
    } else if (value === 1) {
      navigate('/movies');
    } else if (value === 2) {
      navigate('/tvseries');
    } else if (value === 3) {
      navigate('/search');
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={bottomNavStyle}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<WhatshotIcon />}
          style={bottomNavActionStyle}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
          style={bottomNavActionStyle}
        />
        <BottomNavigationAction
          label="TV Series"
          icon={<TvIcon />}
          style={bottomNavActionStyle}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          style={bottomNavActionStyle}
        />
      </BottomNavigation>
    </Box>
  );
}
