import React from 'react';
import { Typography } from '@mui/material';


const Paragraph = ({ text, maxWidth, mx, textAlign }) => {
  return (
    <Typography
    sx={{
      maxWidth: maxWidth,
      mx: mx,
      textAlign: textAlign,
      py: 3,
      color: '#7b7b7b',
    }}
    >
        {text}
    </Typography>
  )
}

export default Paragraph;