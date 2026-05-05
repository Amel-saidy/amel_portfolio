// src/components/Documents.jsx
import React, { useState } from 'react';
import { FaDownload, FaFileAlt, FaBook, FaCertificate, FaPlus, FaTrash } from 'react-icons/fa';
import './Documents.css';

const Documents = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "Resume / CV",
      description: "My professional resume highlighting skills, experience, and accomplishments.",
      icon: <FaFileAlt />,
      fileName: "Amel_Saidy_CV.pdf",
      type: "pdf",
      isActive: true
    },
    {
      id: 2,
      title: "Academic Transcript",
      description: "Official academic transcript from my university education.",
      icon: <FaBook />,
      fileName: "Academic_Transcript.pdf",
      type: "pdf",
      isActive: true
    },
    {
      id: 3,
      title: "Degree Certificate",
      description: "Verified degree certificate from my educational institution.",
      icon: <FaCertificate />,
      fileName: "Degree_Certificate.pdf",
      type: "pdf",
      isActive: true
    },
    {
      id: 4,
      title: "Arabic School Certificate",
      description: "Certificate from my Arabic language school education.",
      icon: <FaCertificate />,
      fileName: "Arabic_School_Certificate.pdf",
      type: "pdf",
      isActive: true
    },
    {
      id: 5,
      title: "Additional Certificate 1",
      description: "Click to add your additional certificates here.",
      icon: <FaPlus />,
      fileName: null,
      type: "pdf",
      isActive: false,
      isPlaceholder: true
    },
    {
      id: 6,
      title: "Additional Certificate 2",
      description: "Click to add your additional certificates here.",
      icon: <FaPlus />,
      fileName: null,
      type: "pdf",
      isActive: false,
      isPlaceholder: true
    },
    {
      id: 7,
      title: "Additional Certificate 3",
      description: "Click to add your additional certificates here.",
      icon: <FaPlus />,
      fileName: null,
      type: "pdf",
      isActive: false,
      isPlaceholder: true
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/src/assets/documents/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (e, docId) => {
    const file = e.target.files[0];
    if (file) {
      const newFileName = file.name;
      setDocuments(documents.map(doc => 
        doc.id === docId 
          ? { ...doc, fileName: newFileName, isActive: true, isPlaceholder: false }
          : doc
      ));
      alert(`File "${newFileName}" added successfully to "${documents.find(d => d.id === docId).title}"!`);
    }
  };

  const handleEditTitle = (docId, newTitle) => {
    setDocuments(documents.map(doc =>
      doc.id === docId
        ? { ...doc, title: newTitle }
        : doc
    ));
    setEditingId(null);
  };

  const handleRemoveFile = (docId) => {
    setDocuments(documents.map(doc =>
      doc.id === docId
        ? { ...doc, fileName: null, isActive: false, isPlaceholder: true }
        : doc
    ));
  };

  return (
    <section id="documents" className="documents">
      <div className="container">
        <h2 className="section-title">Documents & Credentials</h2>
        <p className="about-text" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
          Download my professional documents, academic credentials, and certifications directly.
        </p>
        <div className="documents-grid">
          {documents.map((doc) => (
            <div key={doc.id} className={`document-card ${doc.isPlaceholder ? 'placeholder' : ''} ${!doc.isActive ? 'inactive' : ''}`}>
              <div className="document-icon">{doc.icon}</div>
              <div className="document-title-container">
                {editingId === doc.id ? (
                  <input
                    type="text"
                    className="edit-title-input"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onBlur={() => handleEditTitle(doc.id, editTitle)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleEditTitle(doc.id, editTitle);
                    }}
                    autoFocus
                  />
                ) : (
                  <h3 
                    className="document-title"
                    onDoubleClick={() => {
                      setEditingId(doc.id);
                      setEditTitle(doc.title);
                    }}
                    title={doc.isPlaceholder ? "Double-click to edit title" : ""}
                  >
                    {doc.title}
                  </h3>
                )}
              </div>
              <p className="document-description">{doc.description}</p>
              
              {doc.isActive ? (
                <div className="document-buttons">
                  <button 
                    className="download-btn"
                    onClick={() => handleDownload(doc.fileName)}
                    title={`Download ${doc.title}`}
                  >
                    <FaDownload /> Download
                  </button>
                  {doc.isPlaceholder === false || doc.id > 4 ? (
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveFile(doc.id)}
                      title="Remove file"
                    >
                      <FaTrash />
                    </button>
                  ) : null}
                </div>
              ) : (
                <div className="upload-section">
                  <label className="upload-btn">
                    <FaPlus /> Upload File
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e, doc.id)}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      style={{ display: 'none' }}
                    />
                  </label>
                  <p className="upload-hint">Click to upload or drag and drop</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;

