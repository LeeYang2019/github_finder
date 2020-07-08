import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: '#3f51b5',
        padding: '5px 0',
      }}
    >
      <Toolbar style={{ display: 'flex' }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Link to="/">
            <i className={icon} style={{ color: '#ffffff' }} />
          </Link>
        </IconButton>
        <Typography variant="h6">{title}</Typography>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            right: '25px',
            width: '160px',
          }}
        >
          <Link to="/">
            <Button variant="outlined" color="default">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outlined" color="default">
              About
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

//default if nothing is passed it
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

//typeCheck warning
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
