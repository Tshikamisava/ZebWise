import React, { useState } from 'react';

function Verification() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState(null);

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
            // Simulate verification process completion after upload
            verifyDocument(); // Call the function for actual verification
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

  const verifyDocument = async () => {
    try {
      // Assuming you have an API endpoint for document verification
      const response = await fetch('YOUR_VERIFICATION_API_ENDPOINT', {
        method: 'POST',
        body: selectedFiles,
        // Additional headers or configurations as needed
      });

      const data = await response.json();

      // Set the verification status based on the API response
      setVerificationStatus(data.status); // Adjust based on your API response structure
    } catch (error) {
      console.error('Error verifying document:', error);
      // Handle error and set appropriate status
      setVerificationStatus('error');
    }
  };

  return (
    <div style={{ backgroundColor: '#0E2954', width: '100%', color: 'white', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
      <div className="header">
        <h2>Document Verification</h2>
      </div>

      <div className="content">
        <p>Select and upload one of the following documents for verification</p>

        <div className="document-section">
          <h4>Choose document type</h4>
          <input type="file" onChange={(e) => handleFileChange(0, e)} />
          <button onClick={() => handleUpload(0)}>Upload</button>

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}

          {uploadProgress === 100 && (
            <p className="upload-complete">
              Upload complete! Verification status: {verificationStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Verification;
