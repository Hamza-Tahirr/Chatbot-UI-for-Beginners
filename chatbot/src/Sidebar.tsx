import React from 'react';

const Sidebar: React.FC = () => {
  // Function to handle file upload
  const handleFileUpload = (file: File) => {
    // Update the content dynamically
    const uploadSection = document.getElementById("uploadSection");
    if (uploadSection) {
      uploadSection.innerHTML = `
        <div class="profile_name">PDF Uploaded:</div>
        <div class="job">${file.name}</div>
      `;
    }
  };

  // Prevent default behavior when dragging over the drop area
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle the dropped files
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  // Click event on "Upload PDF" to trigger file input
  const handleClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

// Change event on file input
const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0];
    handleFileUpload(file);
  }
};
  return (
    <div className="sidebar close">
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">Chat PDF</span>
      </div>
      <ul className="nav-links">
        {/* Sidebar content */}
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </a>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="#">User 1</a></li>
          </ul>
        </li>
        {/* Rest of the list items */}
        <li>
          <div className="profile-details">
            <div className="profile-content">
              <img src="" alt="PDF Img" />
            </div>
            <div className="name-job" id="uploadSection">
                <div className="profile_name">Upload PDF</div>
                <div className="job" id="dropArea" onDragOver={handleDragOver} onDrop={handleDrop}>Drag and Drop Here</div>
                <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileInputChange} />
              </div>
            <i className="bx "></i>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
