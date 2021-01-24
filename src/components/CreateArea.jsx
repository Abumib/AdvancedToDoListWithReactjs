import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [rowClicked, setRowClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function editRow() {
    setRowClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {rowClicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={editRow}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={rowClicked ? 3 : 1}
        />
        <Zoom in={rowClicked}>
          {/* in={rowClicked} in will check if rowClicked is true then it will add the zoom and button or Fab or else nothing will show up */}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
          {/* this is a componenet Floating action button */}
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
