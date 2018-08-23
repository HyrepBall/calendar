
function completeTasksReducer(items = [], action) {
  switch(action.type) {
    case 'COMPLETE_ADD' :
      return [
        ...items,
        action.payload,
      ]
    case 'COMPLETE_REMOVE' : 
      return items.filter(item => items.indexOf(item) !== action.payload.index)
    default:
      return items;
  }
  
};

export default completeTasksReducer;
