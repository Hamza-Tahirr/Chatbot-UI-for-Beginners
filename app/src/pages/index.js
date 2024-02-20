// pages/index.js
import React from 'react';
import HomeSection from '../components/heel';
import Sidebar from '../components/Sidebar';

const IndexPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <HomeSection />
      </div>
      <div style={{ flexBasis: '300px' }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default IndexPage;
