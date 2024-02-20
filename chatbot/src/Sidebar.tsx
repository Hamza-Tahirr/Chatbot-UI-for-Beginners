// Sidebar.tsx
import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar close">
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">Chat PDF</span>
      </div>
      <ul className="nav-links">
        {/* Sidebar content */}
        {/* Replace the HTML content here */}
      </ul>
    </div>
  );
}

export default Sidebar;
