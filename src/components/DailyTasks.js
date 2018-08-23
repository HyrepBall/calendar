import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import '../App.css';

const styles = theme => ({
  emptyTitle: {
    margin: '80px auto 50px',
    textAlign: 'center'
  }
});

class DailyTasks extends Component {

  handleRemoveTask(index) {
    console.log(index)
    this.props.onRemoveTask({
      type: 'DAILY_REMOVE',
      payload: {
        index: index
      }
    })
  }

  onCompleteTask(task, index) {
    this.props.onCompleteTask({
      type: 'COMPLETE_ADD',
      payload: task
    });

    this.props.onRemoveTask({
      type: 'DAILY_REMOVE',
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
          tasks.length === 0 &&
          <Typography variant="headline" color="textPrimary" classes={{root: classes.emptyTitle}}>
            Нет активных задач
          </Typography>
        }
        {tasks.map((task, index) => {
          return (
            <Fade direction="up" key={task.id} mountOnEnter unmountOnExit in>
              <div className="list-item">
                {task.title}
                <span className="list-item-icons"  >
                  <Icon
                    style={{fontSize: 22, marginRight: 20, color: '#00CE6A',}}
                    onClick={() => this.onCompleteTask(task, index)}
                  >
                    done
                  </Icon>
                  <Icon
                    style={{fontSize: 22, color: '#EA5946'}}
                    onClick={() => this.handleRemoveTask(index)}
                  >
                    delete
                  </Icon>
                </span>
              </div>
            </Fade>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(DailyTasks);
