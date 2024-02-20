import React from 'react';
import { Button, TextField, Grid, InputAdornment } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const SendArea = () => {
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={8} sm={9}>
        <TextField fullWidth placeholder="Type your message..." variant="outlined" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachFileIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <InsertEmoticonIcon />
            </InputAdornment>
          ),
          sx: { borderRadius: 4 }
        }} />
      </Grid>
      <Grid item xs={4} sm={3}>
        <Button variant="contained" color="primary" fullWidth>Send</Button>
      </Grid>
    </Grid>
  );
};

export default SendArea;
