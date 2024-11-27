import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from "react";
import { deleteVocabulary, fetchVocabulary, updateVocabulary } from "../api";

const VocabularyList = () => {
  const [open, setOpen] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [wordSelect, setWordSelect] = useState("");
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');
  const [vocabulary, setVocabulary] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDialogEdit = () => {
    setOpenDialogEdit(false);
  }


  const handleDelete = async (id) => {
    await deleteVocabulary(id);
    setVocabulary(vocabulary.filter((word) => word._id !== id));
  };

  const handleEdit = async (id) => {
    setOpenDialogEdit(true);
    setWordSelect(() =>{
      return vocabulary.find(item => item._id === id);
    })
  };

  const handleSubmitChange =  async (e) => {
    e.preventDefault();
    await updateVocabulary(wordSelect)
    .then(res => {
      if (res.status === 200) {
        setVocabulary(prevVocabulary => 
          prevVocabulary.map(item => 
            item._id === wordSelect._id ? res.data : item
          )
        );
      }
    })
    setWordSelect({ word: "", meaning: "", example: "", type: "" });
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchVocabulary();
      setVocabulary(data);
    };
    fetchData();
  }, []);
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
                {word.word} - {word.meaning}({word.type})
                <button onClick={() => handleEdit(word._id)}>Edit</button>
                <button onClick={() => handleDelete(word._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      
      {/* dialog edit world */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openDialogEdit}
        onClose={handleClose}
      >
        <DialogTitle>List your vocabulary</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmitChange}>
            <input
              type="text"
              placeholder="Word"
              value={wordSelect?.word}
              onChange={e => setWordSelect({...wordSelect, word: e.target.value})}
            />
            <input
              type="text"
              placeholder="Meaning"
              value={wordSelect?.meaning}
              onChange={e => setWordSelect({...wordSelect, meaning: e.target.value})}
            />
            <input
              type="text"
              placeholder="Example"
              value={wordSelect?.example}
              onChange={e => setWordSelect({...wordSelect, example: e.target.value})}
            />
            <input
              type="text"
              placeholder="Type"
              value={wordSelect?.type}
              onChange={e => setWordSelect({...wordSelect, type: e.target.value})}
            />
            <button type="submit">Edit Word</button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogEdit}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VocabularyList;
