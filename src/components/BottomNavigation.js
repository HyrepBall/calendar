import React, { Component } from 'react';
import { Link } from 'react-router-dom' // react-router v4

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/ButtonBase';

import '../App.css';

const routes = [
  {
    path: '/',
    label: 'Задачи',
    icon: 'format_list_numbered',
  },
  {
    path: '/add',
    label: 'Добавить',
    icon: 'playlist_add',
  },
  {
    path: '/schedule',
    label: 'Расписание',
    icon: 'schedule',
  },
]

class BottomNav extends Component {

  renderLinks = () => {
    const currentPath = this.props.appState.router.location.pathname;

    return routes.map((el) => {
      return (
        <Link to={el.path} key={el.path}>
          <Button 
            disableTouchRipple
            variant="contained" 
            className={`bottom-nav-link ${currentPath === el.path ? 'current-link' : ''}`}
          >
            <Icon
              className="bottom-link-icon"
            >
              {el.icon}
            </Icon>
            <span className="bottom-link-label">{el.label}</span>
          </Button>
        </Link >
      )
    })
  }

  render() {
    return (
      <div className="bottom-nav">
        {this.renderLinks()}
      </div>
    );
  }
}

export default BottomNav;
