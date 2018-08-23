import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import '../App.css';

const styles = theme => ({
  emptyTitle: {
    margin: '80px auto 50px',
    textAlign: 'center'
  }
});

class CompletedTasks extends Component {

  onUndo(task, index) {
    this.props.onAddTask({
      type: task.actionType,
      payload: task,
    })

    this.props.onRemoveTask({
      type: 'COMPLETE_REMOVE',
      payload: {
        index: index
      }
    })
  }

  handleRemoveTask(index) {
    this.props.onRemoveTask({
      type: 'COMPLETE_REMOVE',
      payload: {
        index: index
      }
    })
  }

  render() {
    const { tasks, classes } = this.props;

    return (
      <div className="">
        {
          tasks.length === 0  &&
          <Typography variant="headline" color="textPrimary" classes={{root: classes.emptyTitle}}>
            Нет выполненных задач
          </Typography>
        }
        {tasks.map((task, index) => {
          return (
            <Slide direction="up" key={task.id} mountOnEnter unmountOnExit in>
              <div className="list-item">
                {task.title}
                <span className="list-item-icons"  >
                  <Icon
                    style={{fontSize: 22, marginRight: 20, color: '#4B89DC',}}
                    onClick={() => this.onUndo(task, index)}
                  >
                    undo
                  </Icon>
                  <Icon
                    style={{fontSize: 22, color: '#EA5946'}}
                    onClick={() => this.handleRemoveTask(index)}
                  >
                    delete
                  </Icon>
                </span>
              </div>
            </Slide>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(CompletedTasks); 
