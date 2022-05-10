import { combineReducers } from "redux";

const addNotesReducer = function (history = [], obj) {
  if (obj.type === "Add") {
    return (history = [...history, obj.payload]);
  }
  return history;
};

const allReducers = combineReducers({
  addNotesReducer,
});

export default allReducers;
