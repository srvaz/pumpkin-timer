import React, { Component } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <AppBar color='default' position='fixed'>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>{this.props.title}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
