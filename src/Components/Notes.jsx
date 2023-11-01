import React, { useState, useEffect } from "react";
import Profile from "../Assets/Profile.svg";
import mynotes from "../Assets/mynotes.svg";
import editnotes from "../Assets/editnotes.svg";
import deletenotes from "../Assets/deletenotes.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateNote, deleteNote } from '../Redux/noteSlice';


function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Save notes to local storage whenever the notes state changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    // Check if both title and content are not empty
    if (newNote.title.trim() === '' || newNote.content.trim() === '') {
      setErrorMessage('Both title and content are required.');
    } else {
      setErrorMessage('');
      if (editingNoteId !== null) {
        dispatch(updateNote({ ...newNote, id: editingNoteId }));
        setEditingNoteId(null);
      } else {
        dispatch(addNote({ ...newNote, id: Date.now() }));
      }
      setNewNote({ title: '', content: '' });
    }
  };

  const handleEditNote = (note) => {
    setNewNote(note);
    setEditingNoteId(note.id);
  };

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId));
    if (editingNoteId === noteId) {
      // Reset editing state if the currently edited note is deleted
      setEditingNoteId(null);
      setNewNote({ title: '', content: '' });
    }
  };


  return (
    <>
      <div className="note-input">
        <div className="note-wrapper">
          <div className="note-header">
            <h1 className="note-heading">Add a Note</h1>
            <img
              src={Profile}
              alt="User Avatar"
              className="userprofile-icon"
              style={{ width: "64px", height: "64px" }}
            />
          </div>
          <input
            className="notes-title-input"
            type="text"
            placeholder="Title"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />
          <textarea
            className="notes-textarea"
            placeholder="Take a note..."
            value={newNote.content}
            onChange={(e) =>
              setNewNote({ ...newNote, content: e.target.value })
            }
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button className="addnote-btn" onClick={handleAddNote}>
            {editingNoteId !== null ? "Update Note" : "Add Note"}
          </button>
        </div>
      </div>
      <div className="note-outputs-wrapper">
        <div className="notes-header">
          <img
            src={mynotes}
            alt="mynotes"
            className="my-icon"
            style={{ width: "32px", height: "32px" }}
          />
          <h1 className="notes-heading">My Notes</h1>
        </div>
        <p className="recently-viewed">Recently viewed</p>
        {notes.length === 0 ? (
          <div className="empty-notes-message"></div>
        ) : (
          <div className="mynotes-wrapper">
            {notes.map((note) => (
              <div className="notes-output" key={note.id}>
                <div className="notes-title">
                  <h1 className="title-note">{note.title}</h1>
                  <div className="notes-icon">
                    <button className="edit-name" onClick={() => handleEditNote(note)}>
                      <img
                        src={editnotes}
                        alt="editnotes"
                        className="my-icon"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </button>
                    <button className="delete-name" onClick={() => handleDeleteNote(note.id)}>
                      <img
                        src={deletenotes}
                        alt="deletenotes"
                        className="my-icon"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </button>
                  </div>
                </div>
                <div className="notes-content">
                  <p className="notes-para">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Notes;
