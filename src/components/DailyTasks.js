import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';

import '../App.css';

class DailyTasks extends Component {

  onRemoveTask(index) {
    this.props.onRemoveTask({
      type: 'DAILY_REMOVE',
      payload: {
        index: index
      }
    })
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className="row-item">
        <p>Ежедневные</p>
        <div>
          {tasks.map((task, index) => {
            return (
              <Slide direction="up" key={task.id} mountOnEnter unmountOnExit in>
                <p className="list-item"  >
                  {task.title}
                  <span className="list-item-del" onClick={() => this.onRemoveTask(index)} >X</span>
                </p>
              </Slide>
            )
          })}
        </div>
      </div>
    )
  }
}

export default DailyTasks
