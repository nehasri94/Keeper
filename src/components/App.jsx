import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]); // making the notes array stateful
  // Below function is used to add the notes to an array
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  // Here we are trying to capture the index location (as id) of the noteItem that requested for deletion when the user clicks the delete button and we match it against all the index values of notes array and return a filtered array with those indexes only which doesn't match the value of id
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* Here we are looping through the notes array and for every noteItem (both title and content) inside the notes array, we are rendering the note component , here the index represents the index of noteItem in notes array*/}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index} // when we map over an array inside the functional component then we need to define a unique key prop for it (and if we want to use the id then we need to re-assign it to some other variable also and use it). We get warning like below if we don't define key prop inside the component :
            // Each child in a list should have a unique "key" prop.
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
