import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router' // react-router v4

import AddForm from './components/AddForm';
import Tasks from './components/Tasks';
import BottomNavigation from './components/BottomNavigation';

import './App.css';



class App extends Component {

  render() {

    const { onAddTask } = this.props;

    return (
      <div className="wrapper app-layout">
        <Switch>
          <Route exact path="/"
            render={() => <Tasks />}
          />
          <Route exact path="/add"
            render={() => <AddForm onAddTask={onAddTask} />}
          />
          <Route exact path="/schedule"
            render={() => <div>schedule</div>}
          />
        </Switch>
        
        
        <BottomNavigation {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => ({
    appState: state
  }),
  dispatch => ({
    onAddTask: (task) => {
      dispatch({type: task.type, payload: task.payload})
    },
  })
)(App)
