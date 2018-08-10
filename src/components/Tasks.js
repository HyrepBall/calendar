import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import DailyTasks from './DailyTasks';
import SingleTasks from './SingleTasks';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: '30px 25px 0 15px' }}>
      {children}
    </Typography>
  );
}

class Tasks extends Component {

  state = {
    currentTab: 0,
  }

  handleTabChange(e, currentTab) {
    this.setState({ currentTab })
  }

  render() {
    const { currentTab } = this.state;
    
    return (
      <div className="row">
        <Paper>
          <Tabs
            value={currentTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(e, currentTab) => this.handleTabChange(e, currentTab)}
          >
            <Tab className="app-tab-item" label="Ежедневные" />
            <Tab className="app-tab-item" label="Разовые" />
            <Tab className="app-tab-item" label="Выполнено" />
          </Tabs>
        </Paper>
        {currentTab === 0 && <TabContainer>
          <DailyTasks tasks={this.props.appState.dailyTasksReducer} onRemoveTask={this.props.onRemoveTask} />
        </TabContainer>}
        {currentTab === 1 && <TabContainer>
          <SingleTasks tasks={this.props.appState.singleTasksReducer} onRemoveTask={this.props.onRemoveTask} />
        </TabContainer>}
        {currentTab === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    )
  }
}

export default connect(
  state => ({
    appState: state
  }),
  dispatch => ({
    onRemoveTask: (task) => {
      dispatch({type: task.type, payload: task.payload})
    }
  })
)(Tasks)
