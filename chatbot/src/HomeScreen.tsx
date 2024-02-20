// HomeScreen.tsx
import React from 'react';
import UploadedPDFsContainer from './UploadedPDFsContainer';
import ChatbotContainer from './ChatbotContainer';

const HomeScreen: React.FC = () => {
  return (
    <div className="home-screen">
      <UploadedPDFsContainer />
      <ChatbotContainer />
    </div>
  );
}

export default HomeScreen;
