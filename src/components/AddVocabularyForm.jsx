import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from "react";
import { addVocabulary } from "../api";

const AddVocabularyForm = () => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formData, setFormData] = useState({ word: "", meaning: "", example: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVocabulary(formData);
    alert("Word added successfully!");
    setFormData({ word: "", meaning: "", example: "", type: "" });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Word
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>List your vocabulary</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Word"
              value={formData.word}
              onChange={(e) => setFormData({ ...formData, word: e.target.value })}
            />
            <input
              type="text"
              placeholder="Meaning"
              value={formData.meaning}
              onChange={(e) => setFormData({ ...formData, meaning: e.target.value })}
            />
             <input
              type="text"
              placeholder="Type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            />
            <button type="submit">Add Word</button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddVocabularyForm;
