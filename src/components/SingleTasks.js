import React, { Component } from 'react';

import '../App.css';

class SingleTasks extends Component {

  render() {
    const { tasks } = this.props;

    return (
      <div className="row-item">
        <p>Разовые</p>
        <div>
          {tasks.map(task => {
            return (
              <p className="list-item" key={task.id} >
                {task.title}
                <span className="list-item-del">X</span>
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default SingleTasks
