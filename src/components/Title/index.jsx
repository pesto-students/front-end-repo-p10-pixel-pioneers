import React from 'react';
import { Typography } from '@mui/material'

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
   }}
    >
      {text}
    </Typography>
  )
}

export default Title