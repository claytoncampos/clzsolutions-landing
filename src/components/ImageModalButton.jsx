// ImageModalButton.jsx
import React, { useState } from 'react';
import { Button, Dialog, DialogContent } from '@mui/material';

export default function ImageModalButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Abrir imagem
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
        <DialogContent>
          <img
            src="https://via.placeholder.com/800x500"
            alt="Imagem em modal"
            style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
