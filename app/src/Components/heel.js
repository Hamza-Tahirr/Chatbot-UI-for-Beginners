// components/HomeSection.js
import React from 'react';
import { DropzoneArea } from 'react-dropzone';
import { Typography } from '@material-ui/core';

const HomeSection = () => {
  const handleFileUpload = (files) => {
    // Handle file upload logic here
    console.log(files);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div style={{ width: '50%' }}>
        <Typography variant="h6">Uploaded PDF</Typography>
        <DropzoneArea
          acceptedFiles={['application/pdf']}
          dropzoneText="Drag and drop a PDF file here or click"
          onChange={handleFileUpload}
        />
      </div>
      <div style={{ width: '50%' }}>
        <Typography variant="h6">Chatbot</Typography>
        {/* Add chatbot component here */}
      </div>
    </div>
  );
};

export default HomeSection;
