import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <i className={icon} />
        </IconButton>
        <Typography variant="h6">{title}</Typography>
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
