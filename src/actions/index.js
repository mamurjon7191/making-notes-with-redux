export const addNotesAction = function (obj) {
  return {
    type: "Add",
    payload: obj,
  };
};
export const deleteNotesAction = function (obj, info) {
  return {
    type: "Delete",
    payload: obj,
    info: info,
  };
};
