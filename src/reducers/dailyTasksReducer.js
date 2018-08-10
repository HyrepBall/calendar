
function dailyTasksReducer(items = [], action) {
  switch(action.type) {
    case 'DAILY_ADD' :
      return [
        ...items,
        action.payload,
      ]
    case 'DAILY_REMOVE' : 
      return items.filter(item => items.indexOf(item) !== action.payload.index)
    default:
      return items;
  }
  
};

export default dailyTasksReducer;
