import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import DailyTasks from './DailyTasks';
import SingleTasks from './SingleTasks';
import CompletedTasks from './CompletedTasks';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: '30px 0px 0 0px' }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  tabsRoot: {
    minHeight: 38,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  tabsBottunsRoot: {
    minHeight: 38,
  },
  label: {
    fontSize: 12,
  },
});

class Tasks extends Component {

  state = {
    currentTab: 0,
  }

  handleTabChange(e, currentTab) {
    this.setState({ currentTab })
  }

  render() {
    const { currentTab } = this.state;
    const { classes, onCompleteTask, onRemoveTask, onAddTask } = this.props;
    
    return (
      <Fade direction="up" mountOnEnter unmountOnExit in timeout={400}>
        <div className="row">
          <div className="page-header">
            <Typography variant="title" color="textPrimary">
              Список задач
            </Typography>
          </div>
          <Tabs
              value={currentTab}
              indicatorColor="primary"
              classes={{root: classes.tabsRoot}}
              onChange={(e, currentTab) => this.handleTabChange(e, currentTab)}
            >
              <Tab classes={{root: classes.tabsBottunsRoot, label: classes.label}} className="app-tab-item" label="Ежедневные" />
              <Tab classes={{root: classes.tabsBottunsRoot, label: classes.label}} className="app-tab-item" label="Разовые" />
              <Tab classes={{root: classes.tabsBottunsRoot, label: classes.label}} className="app-tab-item" label="Выполнено" />
            </Tabs>
          
          {currentTab === 0 && <TabContainer>
            <DailyTasks
              tasks={this.props.appState.dailyTasksReducer}
              onRemoveTask={onRemoveTask}
              onCompleteTask={onCompleteTask}
            />
          </TabContainer>}
          {currentTab === 1 && <TabContainer>
            <SingleTasks
              tasks={this.props.appState.singleTasksReducer}
              onRemoveTask={onRemoveTask}
              onCompleteTask={onCompleteTask}
              
            />
          </TabContainer>}
          {currentTab === 2 && <TabContainer>
            <CompletedTasks tasks={this.props.appState.completeTasksReducer} onRemoveTask={onRemoveTask} onAddTask={onAddTask} />
          </TabContainer>}
        </div>
      </Fade>
    )
  }
}

export default withStyles(styles)(Tasks);