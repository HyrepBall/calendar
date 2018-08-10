import React, { Component } from 'react';
import { Link } from 'react-router-dom' // react-router v4

import Button from '@material-ui/core/ButtonBase';

import '../App.css';

class BottomNav extends Component {

  render() {
    // console.log(this.props.appState.router.location.pathname)
    
    return (
      <div className="bottom-nav">
        <Link to="/" >
          <Button variant="contained" className="bottom-nav-link">
            Задачи
          </Button>
        </Link >
        <Link to="/add" >
          <Button variant="contained" className="bottom-nav-link">
            Добавить
          </Button>
        </Link >
        <Link to="/schedule" >
          <Button variant="contained" className="bottom-nav-link">
            Расписание
          </Button>
        </Link >
      </div>
    );
  }
}

export default BottomNav;
