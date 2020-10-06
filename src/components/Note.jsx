import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id); // Here we are calling the onDelete() on when the users clicks the delete button hence its defined inside an arrow function rather than calling directly which will not give desired result.
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
