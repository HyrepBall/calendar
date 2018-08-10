import { combineReducers } from 'redux';
import dailyTasksReducer from './dailyTasksReducer';
import singleTasksReducer from './singleTasksReducer';

const rootReducer = combineReducers({
  dailyTasksReducer,
  singleTasksReducer
});


export default rootReducer;
