import { createStore } from 'redux';
import dailyTasks from '../reducers';

const store = createStore(dailyTasks);

export default store;
