const addNotesReducer = function (history = [], obj) {
  if (obj.type == "Add") {
    return (history = [...history, obj.payload]);
  }
  return history;
};
