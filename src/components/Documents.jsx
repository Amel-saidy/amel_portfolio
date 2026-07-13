// src/components/Documents.jsx
import React from 'react';
import { FaDownload, FaFileAlt, FaBook, FaCertificate } from 'react-icons/fa';
import './Documents.css';

// Import document assets so Vite bundles them correctly for development and production
import cvPdf from '../assets/documents/Amel_Saidy_CV.pdf';
import transcriptPdf from '../assets/documents/Academic_Transcript.pdf';
import degreePdf from '../assets/documents/Degree_Certificate.pdf';
import arabicSchoolPdf from '../assets/documents/Arabic_School_Certificate.pdf';

const Documents = () => {
  const documents = [
    {
      id: 1,
      title: "Resume / CV",
      description: "My professional resume highlighting skills, experience, and accomplishments.",
      icon: <FaFileAlt />,
      fileUrl: cvPdf,
      fileName: "Amel_Saidy_CV.pdf"
    },
    {
      id: 2,
      title: "Academic Transcript",
      description: "Official academic transcript from my university education.",
      icon: <FaBook />,
      fileUrl: transcriptPdf,
      fileName: "Academic_Transcript.pdf"
    },
    {
      id: 3,
      title: "Degree Certificate",
      description: "Verified degree certificate from my educational institution.",
      icon: <FaCertificate />,
      fileUrl: degreePdf,
      fileName: "Degree_Certificate.pdf"
    },
    {
      id: 4,
      title: "Arabic School Certificate",
      description: "Certificate from my Arabic language school education.",
      icon: <FaCertificate />,
      fileUrl: arabicSchoolPdf,
      fileName: "Arabic_School_Certificate.pdf"
    }
  ];

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <div key={doc.id} className="document-card">
              <div className="document-icon">{doc.icon}</div>
              <div className="document-title-container">
                <h3 className="document-title">{doc.title}</h3>
              </div>
              <p className="document-description">{doc.description}</p>
              
              <div className="document-buttons">
                <button 
                  className="download-btn"
                  onClick={() => handleDownload(doc.fileUrl, doc.fileName)}
                  title={`Download ${doc.title}`}
                >
                  <FaDownload /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;


