import React, { useState } from 'react';
import './App.css';

interface PDFFile {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [uploadedPDF, setUploadedPDF] = useState<PDFFile | null>(null);
  const [userInput, setUserInput] = useState<string>('');

  const handlePDFUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setUploadedPDF({ name: file.name, url: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleChatSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle chat submission logic here
    console.log('User asked:', userInput);
    setUserInput('');
  };

  return (
    <div className="App">
      <div className="home-section">
        <div className="pdf-container">
          <h2>Uploaded PDF</h2>
          {uploadedPDF && (
            <embed src={uploadedPDF.url} type="application/pdf" width="100%" height="600px" />
          )}
          <input type="file" accept=".pdf" onChange={handlePDFUpload} />
        </div>
        <div className="chat-container">
          <h2>Chatbot</h2>
          <form onSubmit={handleChatSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Ask a question..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="sidebar-section">Sidebar Section</div>
    </div>
  );
};

export default App;
