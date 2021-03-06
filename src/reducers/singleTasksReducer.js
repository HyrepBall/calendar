
function singleTasksReducer(items = [], action) {
  switch(action.type) {
    case 'SINGLE_ADD' :
      return [
        ...items,
        action.payload,
      ]
    case 'SINGLE_REMOVE' : 
      return items.filter(item => items.indexOf(item) !== action.payload.index)
    default:
      return items;
  }
};

export default singleTasksReducer;
