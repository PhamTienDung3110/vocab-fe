import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from "react";
import { deleteVocabulary, fetchVocabulary } from "../api";

const VocabularyList = () => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchVocabulary();
      setVocabulary(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteVocabulary(id);
    setVocabulary(vocabulary.filter((word) => word._id !== id));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        List words
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>List your vocabulary</DialogTitle>
        <DialogContent>
          <ul>
            {vocabulary.map((word) => (
              <li key={word._id}>
                {word.word} - {word.meaning}{" "}
                <button onClick={() => handleDelete(word._id)}>Edit</button>
                <button onClick={() => handleDelete(word._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VocabularyList;
