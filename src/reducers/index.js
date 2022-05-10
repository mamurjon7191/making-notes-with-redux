import { combineReducers } from "redux";

const addNotesReducer = function (history = [], obj) {
  if (obj.type === "Add") {
    return (history = [...history, obj.payload]);
  }
  return history;
};
const deleteNotesReducer = function (history = [], obj) {
  if (obj.type === "Delete") {
    const orni = obj.info.findIndex((val) => {
      return val.title == obj.payload.title;
    });
    return (history = [obj.info.splice(orni, 1)]);
  }
  return history;
};

const allReducers = combineReducers({
  addNotesReducer,
  deleteNotesReducer,
});

export default allReducers;
