import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" }); // making the CreateArea component stateful (handling complex state as note is an object)
  function handleChange(event) {
    const { name, value } = event.target; // destructuring the event object
    setNote((prevNote) => {
      return {
        ...prevNote, // here we have used spread operator to expand the previous values of the note object
        [name]: value,
      };
    });
  }
  // Below function is defined to pass the note from child (CreateArea.jsx) to parent component (App.jsx), the onClick event is handled by the event listener (addNote()) which is defined in parent component.
  function submitNote(event) {
    event.preventDefault(); //to prevent page refresh when using the form tag
    props.onAdd(note);
    setNote({ title: "", content: "" }); // to empty the form after that note is added
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
