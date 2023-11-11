import React, { useState } from 'react';

function Verification() {
  const [selectedFiles, setSelectedFiles] = useState([null, null, null]);
  const [uploadProgress, setUploadProgress] = useState([0, 0, 0]);

  const handleFileChange = (index, e) => {
    const files = [...selectedFiles];
    files[index] = e.target.files[0];
    setSelectedFiles(files);
  };

  const handleUpload = (index) => {
    const selectedFile = selectedFiles[index];

    if (selectedFile) {
      console.log(`Uploading ${getDocumentTypeName(index)}:`, selectedFile);

      // Simulating file upload with a timeout
      const uploadInterval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[index] = prevProgress[index] + 10;
          if (newProgress[index] >= 100) {
            clearInterval(uploadInterval);
          }
          return newProgress;
        });
      }, 500);
    } else {
      console.log(`No file selected for ${getDocumentTypeName(index)}`);
    }
  };

  const getDocumentTypeName = (index) => {
    switch (index) {
      case 0:
        return 'Identity';
      case 1:
        return 'Tax Number';
      case 2:
        return 'CK';
      default:
        return `Document type ${index + 1}`;
    }
  };

  return (
    <div style={{ border: '2px solid white', backgroundColor: '#0E2954', width: '100%', height: '100vh', color: 'white', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <div className="header">
        <h2>Document Verification</h2>
      </div>

      <div className="content">
        <p>Select and upload one of the following documents for verification</p>

        {[0, 1, 2].map((index) => (
          <div key={index} className="document-section">
            <h4>{getDocumentTypeName(index)}</h4>
            <input type="file" onChange={(e) => handleFileChange(index, e)} />
            <button onClick={() => handleUpload(index)}>Upload</button>

            {uploadProgress[index] > 0 && uploadProgress[index] < 100 && (
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${uploadProgress[index]}%` }}
                ></div>
              </div>
            )}

            {uploadProgress[index] === 100 && <p className="upload-complete">Upload complete!</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Verification;
