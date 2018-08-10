
function singleTasksReducer(items = [], action) {
  switch(action.type) {
    case 'SINGLE_ADD' :
      return [
        ...items,
        action.payload,
      ];
    default:
      return items;
  }
};

export default singleTasksReducer;
