import { combineReducers } from 'redux';
import dailyTasksReducer from './dailyTasksReducer';
import singleTasksReducer from './singleTasksReducer';
import completeTasksReducer from './completeTasksReducer';

const rootReducer = combineReducers({
  dailyTasksReducer,
  singleTasksReducer,
  completeTasksReducer,
});


export default rootReducer;
