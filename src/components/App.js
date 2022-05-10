import React from "react";
import Header from "./Header";
import NotesList from "./NotesList.js";

const App = function () {
  return (
    <div>
      <Header />
      <NotesList />
    </div>
  );
};

export default App;
