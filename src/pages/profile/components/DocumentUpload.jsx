import { useState, useRef } from "react";

export default function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "passport_copy.pdf",
      size: 2.4,
      date: new Date(2025, 9, 22), // Oct 22, 2025
      file: null,
    },
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const formatFileSize = (sizeInMB) => {
    return `${sizeInMB.toFixed(1)} MB`;
  };

  const formatDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const validateFile = (file) => {
    const validTypes = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes

    if (!validTypes.includes(file.type)) {
      alert("Invalid file type. Please upload PDF, PNG, or JPG files only.");
      return false;
    }

    if (file.size > maxSize) {
      alert("File size exceeds 10MB limit.");
      return false;
    }

    return true;
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    
    fileArray.forEach((file) => {
      if (validateFile(file)) {
        const newFile = {
          id: Date.now() + Math.random(),
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(1),
          date: new Date(),
          file: file,
        };
        setUploadedFiles((prev) => [...prev, newFile]);
      }
    });
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFiles(files);
    }
    // Reset input so same file can be selected again
    e.target.value = "";
  };

  const handleChooseFiles = () => {
    fileInputRef.current?.click();
  };

  const handleDownload = (fileId) => {
    const file = uploadedFiles.find((f) => f.id === fileId);
    if (file && file.file) {
      const url = URL.createObjectURL(file.file);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      // If it's the existing file without a file object, just show a message
      alert(`Downloading ${file?.name}`);
    }
  };

  const handleDelete = (fileId) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  return (
    <div className="profile-section overview-section">
      <div className="profile-section-header">
        <div>
          <h3 className="profile-section-title">Document Upload</h3>
          <p className="profile-section-subtitle">Upload required documents for verification</p>
        </div>
      </div>

      <div className="document-upload-area">
        <div
          className={`document-upload-dropzone ${isDragging ? "dragging" : ""}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleChooseFiles}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 4V16M12 4L8 8M12 4L16 8M4 20H20"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="upload-text">Drop files here or click to upload</p>
          <p className="upload-hint">Supported formats: PDF, PNG, JPG (Max 10MB)</p>
          <button 
            className="upload-button" 
            onClick={(e) => {
              e.stopPropagation();
              handleChooseFiles();
            }}
          >
            Choose Files
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileInput}
            style={{ display: "none" }}
          />
        </div>

        {uploadedFiles.length > 0 && (
          <div className="uploaded-files-list">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="uploaded-file-item">
                <div className="file-info">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
                      fill="#3B82F6"
                    />
                  </svg>
                  <div>
                    <div className="file-name">{file.name}</div>
                    <div className="file-meta">
                      {formatFileSize(parseFloat(file.size))} • Uploaded {formatDate(file.date)}
                    </div>
                  </div>
                </div>
                <div className="file-actions">
                  <button
                    className="file-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(file.id);
                    }}
                    aria-label="Download file"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 11.3333V2M8 11.3333L5.33333 8.66667M8 11.3333L10.6667 8.66667M2 13.3333H14"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="file-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(file.id);
                    }}
                    aria-label="Delete file"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 4L4 12M4 4L12 12"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
