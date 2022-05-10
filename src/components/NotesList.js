import React, { useState } from "react";
import { connect } from "react-redux";
import { addNotesAction } from "../actions";

const NotesList = function (props) {
  console.log(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  ///////////////////////////////////////////////////////////////
  const renderNote = function () {
    return props.addNotesReducer.map((val, index) => {
      return (
        <div className="ui card" key={index}>
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
                disabled={true}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={val.description}
              ></textarea>
            </p>
            <div className="ui buttons" style={{ marginLeft: "45px" }}>
              <button className="ui button">Edit</button>
              <div className="or"></div>
              <button className="ui positive button">Save</button>
            </div>
          </div>
        </div>
      );
    });
  };
  ///////////////////////////////////////////////////////////////
  const addNote = function () {
    props.addNotesAction({
      title: title,
      description: description,
    });
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
            <p>
              <textarea
                style={{ width: "100%", height: "200px", outline: "none" }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </p>
            <div className="ui buttons" style={{ marginLeft: "45px" }}>
              <button className="ui button">Delete</button>
              <div className="or"></div>
              <button className="ui positive button" onClick={addNote}>
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

export default connect(getMyState, { addNotesAction })(NotesList);
