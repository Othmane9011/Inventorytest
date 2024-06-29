import React, { useState } from 'react';
import AWS from 'aws-sdk';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: 'inventaire' },
    });

    const uploadParams = {
      Bucket: 'inventaire',
      Key: `uploads/${selectedFile.name}`,
      Body: selectedFile,
      ACL: 'public-read',
    };

    try {
        const data = await s3.upload(uploadParams).promise();
        setImageUrl(data.Location);
        console.log('File uploaded successfully:', data.Location);
      } catch (err) {
        console.error('Error uploading file:', err);
        alert('Failed to upload file. Check console for details.');
      }
    };

  return (
    <div>
      <h2>Upload Image to S3</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
      {imageUrl && (
        <div>
          <p>Uploaded Image URL: <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a></p>
          <img src={imageUrl} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;