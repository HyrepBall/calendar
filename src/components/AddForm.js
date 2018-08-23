import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  formControl: {
    minWidth: '100%',
  },
  textField: {
    width: '100%',
  },
  label: {
    color: theme.palette.text.primary,
  },
  addButton: {
    margin: '30px auto 10px',
    display: 'block',
  }
});

class AddForm extends Component {

  state = {
    taskLabel: '',
    taskActionType: 0,
    taskDate: '',
  }

  saveInputValue(e) {
    this.setState({
      taskLabel: e.target.value,
    })
  }

  saveDateValue(e) {
    this.setState({
      taskDate: e.target.value,
    })
  }

  actionTypeChange(e) {
    this.setState({
      taskActionType: e.target.value,
    })
  }

  onAddTask() {
    let actionType
    const { taskActionType } = this.state; 

    if (taskActionType === 0) {
      actionType = 'DAILY_ADD'
    } else
    if (taskActionType === 1) {
      actionType = 'SINGLE_ADD'
    } else {
      actionType = 'SCHEDULE_ADD'
    }

    this.props.onAddTask({
      type: actionType,
      payload: {
        id: Date.now().toString(),
        actionType: actionType,
        title: this.state.taskLabel,
        scheduleData: this.state.taskActionType === 2 ? this.state.taskDate : '',
      }
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Fade direction="up"  mountOnEnter unmountOnExit in timeout={400}>
        <div>
          <div className="page-header">
            <Typography variant="title">
              Создать новое задание
            </Typography>
          </div>
          <div className="add-form">
            <div className="add-form-wrapper">
              <div className="add-form-row">
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="age-label-placeholder" >
                    Тип задачи
                  </InputLabel>
                  <Select
                    value={this.state.taskActionType}
                    onChange={e => this.actionTypeChange(e)}
                    input={<Input name="age" id="age-label-placeholder" />}
                    displayEmpty
                    name="age"
                  >
                    <MenuItem classes={{root: classes.label}} value={0}>Ежедневные</MenuItem>
                    <MenuItem classes={{root: classes.label}} value={1}>Разовые</MenuItem>
                    <MenuItem classes={{root: classes.label}} value={2}>Запланировать</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="add-form-row">
                <TextField
                  id="name"
                  label="Название задачи"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder=""
                  fullWidth
                  margin="normal"
                  onBlur={e => this.saveInputValue(e)}
                />
              </div>

              {this.state.taskActionType === 2 &&
                <Fade in>
                  <div className="add-form-row">
                    <TextField
                      id="date"
                      label="Выберите дату"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onBlur={e => this.saveDateValue(e)}
                    />
                  </div>
                </Fade>
              }

              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => this.onAddTask()} 
                classes={{root: classes.addButton}}
              >
                Добавить
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default withStyles(styles)(AddForm);
