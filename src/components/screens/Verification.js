import React, { useState } from 'react'


function Verification() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const handleUpload = () =>{

       if (selectedFile) {
      
        
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
    }

    }
  return (
    <div>
        Verification
        <p>Select and upload one of the following documents for verification</p>

        <h4>Choose document type</h4>
        <input type='file' onChange={handleFileChange}/>
        <button onClick={handleUpload}>Upload</button>

    </div>
  )
}

export default Verification