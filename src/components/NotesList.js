import React, { useState } from "react";
import { connect } from "react-redux";
import { addNotesAction, deleteNotesAction } from "../actions";

const NotesList = function (props) {
  console.log(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  ///////////////////////////////////////////////////////////////
  const renderNote = function () {
    return props.addNotesReducer.map((val, index) => {
      return (
        <div
          className="ui card"
          key={index}
          style={{
            padding: "0.3rem",
            backgroundColor: "#43e97b",
          }}
        >
          <div style={{ textAlign: "right", fontSize: "30px" }}>
            <i
              onClick={deleteFunc}
              className="close icon"
              style={{ cursor: "pointer", color: "red" }}
            ></i>
          </div>
          <div className="content">
            <div className="header">
              <input
                disabled={true}
                style={{ width: "100%", outline: "none" }}
                placeholder="Note title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={val.title}
              ></input>
            </div>
            <p>
              <textarea
                style={{
                  width: "100%",
                  height: "200px",
                  outline: "none",
                }}
                // disabled={true}
                readOnly={true}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={val.description}
              ></textarea>
            </p>
            <div className="ui buttons" style={{ marginLeft: "45px" }}>
              <button className="ui button" onClick={editFunc}>
                Edit
              </button>
              <div className="or"></div>
              <button className="ui positive button">Save</button>
            </div>
          </div>
        </div>
      );
    });
  };
  ///////////////////////////////////////////////////////////////
  const addNote = function (e) {
    props.addNotesAction({
      title: title,
      description: description,
    });
    e.target.parentElement.previousElementSibling.value = "";
    e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.value =
      "";
  };
  ///////////////////////////////////////////////////////////////
  const deleteFunc = function () {
    console.log(props);
    props.deleteNotesAction(
      {
        title: title,
        description: description,
      },
      props.addNotesReducer
    );
  };
  ///////////////////////////////////////////////////////////////
  const editFunc = function (e) {
    // e.target.parentElement.previousElementSibling.firstElementChild.disabled = false;
    e.target.parentElement.previousElementSibling.firstElementChild.readOnly = false;
  };
  ///////////////////////////////////////////////////////////////
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="ui card">
          <div className="content">
            <div className="header">
              <input
                style={{ width: "100%", outline: "none" }}
                placeholder="Note title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <textarea
              className="area"
              style={{ width: "100%", height: "200px", outline: "none" }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <div className="ui buttons" style={{ marginLeft: "45px" }}>
              <button
                className="ui positive button"
                onClick={addNote}
                style={{ marginLeft: "130px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr " }}>
        {renderNote()}
      </div>
    </div>
  );
};

const getMyState = function (state) {
  return state;
};

export default connect(getMyState, { addNotesAction, deleteNotesAction })(
  NotesList
);
