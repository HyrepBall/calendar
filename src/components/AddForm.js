import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = () => ({
  formControl: {
    minWidth: '100%',
  },
  textField: {
    width: '100%',
  },
});

class AddForm extends Component {

  state = {
    taskLabel: '',
    taskActionType: 0,
  }

  saveInputValue(e) {
    this.setState({
      taskLabel: e.target.value,
    })
  }

  actionTypeChange(e) {
    let actionType

    if (e.target.value === 0) {
      actionType = 'DAILY_ADD'
    } else
    if (e.target.value === 1) {
      actionType = 'SINGLE_ADD'
    } else {
      actionType = 'SCHEDULE_ADD'
    }

    this.setState({
      taskActionType: e.target.value,
    })
  }

  onAddTask() {
    this.props.onAddTask({
      type: this.state.taskActionType,
      payload: {
        id: Date.now().toString(),
        title: this.state.taskLabel
      }
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="add-form">
        <div className="add-form-wrapper">
          <div className="add-form-row">
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Тип задачи
              </InputLabel>
              <Select
                value={this.state.taskActionType}
                onChange={e => this.actionTypeChange(e)}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="age"
              >
                <MenuItem value={0}>Ежедневные</MenuItem>
                <MenuItem value={1}>Разовые</MenuItem>
                <MenuItem value={2}>Запланировать</MenuItem>
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

          <div className="add-form-row">
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => this.onAddTask()} 
          >
            Добавить
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AddForm);
