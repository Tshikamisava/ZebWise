import React, { useState } from 'react';

function Verification() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);

      // Simulating file upload with a timeout
      const uploadInterval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(uploadInterval);
          }
          return newProgress;
        });
      }, 500);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div style={{backgroundColor: '#0E2954',width:'100%',color:'white',justifyContent:'center', alignItems:'center'}}>
      <div className="header">
        <h2>Document Verification</h2>
      </div>

      <div className="content">
        <p>Select and upload one of the following documents for verification</p>

        <div className="document-section">
          <h4>Choose document type</h4>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}

          {uploadProgress === 100 && <p className="upload-complete">Upload complete!</p>}
        </div>
      </div>
    </div>
  );
}

export default Verification;
