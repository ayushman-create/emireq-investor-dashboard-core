import { useState, useRef, useEffect } from "react";
import './DocumentsPage.css';
import avatar from "../../assets/arab1.png";

const DocumentsPage = ({ toggleTheme }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const profileRef = useRef(null);

  // Sample documents data
  const [documents] = useState([
    { id: 1, name: 'Investment Agreement - Series A.pdf', category: 'Agreements', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Verified' },
    { id: 2, name: 'KYC Compliance Certificate.pdf', category: 'Compliance', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Verified' },
    { id: 3, name: 'Shareholder Agreement.pdf', category: 'Agreements', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Verified' },
    { id: 4, name: 'Token Purchase Agreement.pdf', category: 'Agreements', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Verified' },
    { id: 5, name: 'AML Compliance Report.pdf', category: 'Compliance', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Pending' },
    { id: 6, name: 'Tax Report Q3 2025.pdf', category: 'Tax', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Verified' },
    { id: 7, name: 'Annual Tax Statement 2025.pdf', category: 'Tax', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Verified' },
    { id: 8, name: 'Regulatory Compliance Certificate.pdf', category: 'Compliance', size: '2.4 MB', date: 'Nov 5, 1015', status: 'Verified' },
  ]);

  // Filter documents based on active filter and search query
  const filteredDocuments = documents.filter(doc => {
    const matchesFilter = activeFilter === 'all' || doc.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Get category counts
  const getCategoryCount = (category) => {
    return documents.filter(doc => doc.category === category).length;
  };

  const handleViewDocument = (doc) => {
    setSelectedDocument(doc);
    setShowPreviewModal(true);
  };

  const handleDownloadDocument = (doc) => {
    // Create a sample document content for demo purposes
    const documentContent = `
===========================================
DOCUMENT INFORMATION
===========================================

Document Name: ${doc.name}
Category: ${doc.category}
File Size: ${doc.size}
Upload Date: ${doc.date}
Status: ${doc.status}

===========================================
DOCUMENT DETAILS
===========================================

This is a sample document download from the 
Emireq Investor Dashboard Document Vault.

In a production environment, this would be 
the actual document file (PDF, DOC, etc.).

Document ID: ${doc.id}
Downloaded: ${new Date().toLocaleString()}

===========================================
    `;
    
    // Create blob and download
    const blob = new Blob([documentContent], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', doc.name.replace('.pdf', '.txt'));
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log('Downloaded:', doc.name);
  };

  const handleShareDocument = (doc) => {
    // Copy share link to clipboard
    const shareUrl = `${window.location.origin}/documents/${doc.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Share link copied to clipboard!');
    }).catch(() => {
      console.log('Sharing:', doc.name);
    });
  };

  const handleExportAll = () => {
    // Create CSV with all filtered documents
    const headers = ['Name', 'Category', 'Size', 'Date', 'Status'];
    
    const rows = filteredDocuments.map(doc => [
      doc.name,
      doc.category,
      doc.size,
      doc.date,
      doc.status
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `documents_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUploadDocuments = () => {
    // Create file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png';
    
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        console.log('Files selected for upload:', files.map(f => f.name));
        // In a real app, you would upload these files to a server
        alert(`${files.length} file(s) selected for upload:\n${files.map(f => f.name).join('\n')}`);
      }
    };
    
    input.click();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="header-container">
        {/* LEFT: Breadcrumbs */}
        <div className="breadcrumb-section">
          <span className="breadcrumb-item inactive">Dashboard</span>
          <span className="separator">›</span>
          <span className="breadcrumb-item inactive">Documents</span>
          <span className="separator">›</span>
          <span className="breadcrumb-item active">All Documents</span>
        </div>

        {/* RIGHT: Header Actions */}
        <div className="em-header-actions">
          {/* THEME TOGGLE */}
          <button
            className="em-header-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_114_12193)">
                <path d="M7.99935 11.3327C9.8403 11.3327 11.3327 9.8403 11.3327 7.99935C11.3327 6.1584 9.8403 4.66602 7.99935 4.66602C6.1584 4.66602 4.66602 6.1584 4.66602 7.99935C4.66602 9.8403 6.1584 11.3327 7.99935 11.3327Z" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 0.666016V1.99935" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14V15.3333" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.8125 2.8125L3.75917 3.75917" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2402 12.2402L13.1869 13.1869" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0.666016 8H1.99935" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 8H15.3333" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.8125 13.1869L3.75917 12.2402" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2402 3.75917L13.1869 2.8125" stroke="#2F2F33" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_114_12193">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>

          {/* SEARCH */}
          <div className="em-header-search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="em-header-search-icon"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.9996 13.9996L11.0996 11.0996"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="em-header-search-input"
            />
          </div>

          {/* NOTIFICATION */}
          <button className="em-header-notification">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="em-header-notification-icon"
            >
              <path
                d="M12 5.33398C12 4.27312 11.5786 3.2557 10.8284 2.50556C10.0783 1.75541 9.06087 1.33398 8 1.33398C6.93913 1.33398 5.92172 1.75541 5.17157 2.50556C4.42143 3.2557 4 4.27312 4 5.33398C4 10.0007 2 11.334 2 11.334H14C14 11.334 12 10.0007 12 5.33398Z"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.15237 14C9.03516 14.2021 8.86693 14.3698 8.66452 14.4864C8.46211 14.6029 8.23262 14.6643 7.99904 14.6643C7.76545 14.6643 7.53596 14.6029 7.33355 14.4864C7.13114 14.3698 6.96291 14.2021 6.8457 14"
                stroke="#2F2F33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="em-header-notification-dot" />
          </button>

          {/* PROFILE */}
          <div className="em-header-profile" ref={profileRef}>
            <button
              className="em-header-profile-menu"
              onClick={(e) => {
                e.stopPropagation();
                setProfileOpen((prev) => !prev);
              }}
            >
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path
                  d="M0.75 0.75H14.75"
                  stroke="#2F2F33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0.75 6.75H11.75"
                  stroke="#2F2F33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="em-header-profile-avatar">
              <img
                src={avatar}
                alt="User profile"
                className="em-header-avatar-img"
              />
            </div>

            {profileOpen && (
              <div className="em-profile-dropdown">
                <div className="em-profile-user">
                  <img src={avatar} alt="User" />
                  <div>
                    <div className="em-profile-name">John Doe</div>
                    <div className="em-profile-email">johndoe@gmail.com</div>
                  </div>
                </div>

                <div className="em-profile-divider" />

                <button className="em-profile-item">
                  <span className="em-profile-item-icon">👤</span>
                  My Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="documents-page">
        {/* Document Vault Header */}
        <div className="doc-vault-header">
          <div className="doc-vault-title-section">
            <h1 className="doc-vault-title">Document Vault</h1>
            <p className="doc-vault-subtitle">Manage your investment documents and compliance certificates</p>
          </div>
          <div className="doc-vault-actions">
            <button className="doc-vault-btn doc-vault-btn-secondary" onClick={handleExportAll}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.83301 8.33398L9.99967 12.5007L14.1663 8.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Export All
            </button>
            <button className="doc-vault-btn doc-vault-btn-primary" onClick={handleUploadDocuments}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.1663 6.66602L9.99967 2.49935L5.83301 6.66602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 2.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Upload Documents
            </button>
          </div>
        </div>

        {/* Stats Cards - 4 in a row */}
        <div className="doc-stats-grid">
          <div className="doc-stat-card doc-stat-card-blue">
            <div className="doc-stat-header">
              <div className="doc-stat-icon doc-stat-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9996 1.99922H5.9996C5.46917 1.99922 4.96046 2.20994 4.58539 2.58501C4.21032 2.96008 3.9996 3.46879 3.9996 3.99922V19.9992C3.9996 20.5297 4.21032 21.0384 4.58539 21.4134C4.96046 21.7885 5.46917 21.9992 5.9996 21.9992H17.9996C18.53 21.9992 19.0387 21.7885 19.4138 21.4134C19.7889 21.0384 19.9996 20.5297 19.9996 19.9992V6.99922L14.9996 1.99922Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0004 1.99922V5.99922C14.0004 6.52965 14.2111 7.03836 14.5862 7.41344C14.9613 7.78851 15.47 7.99922 16.0004 7.99922H20.0004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0004 9H8.0004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0004 13.0008H8.0004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0004 16.9992H8.0004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <span className="doc-stat-badge doc-stat-badge-blue">All Documents</span>
            </div>
            <div className="doc-stat-content">
              <span className="doc-stat-label">Total Documents</span>
              <span className="doc-stat-value">{documents.length}</span>
            </div>
            <div className="doc-stat-bg doc-stat-bg-blue"></div>
          </div>

          <div className="doc-stat-card doc-stat-card-green">
            <div className="doc-stat-header">
              <div className="doc-stat-icon doc-stat-icon-green">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0004 21.9992C17.5232 21.9992 22.0004 17.5221 22.0004 11.9992C22.0004 6.47637 17.5232 1.99922 12.0004 1.99922C6.47752 1.99922 2.00037 6.47637 2.00037 11.9992C2.00037 17.5221 6.47752 21.9992 12.0004 21.9992Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12.0008L11 14.0008L15 10.0008" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <span className="doc-stat-badge doc-stat-badge-green">Active</span>
            </div>
            <div className="doc-stat-content">
              <span className="doc-stat-label">Verified</span>
              <span className="doc-stat-value">{documents.filter(d => d.status === 'Verified').length}</span>
            </div>
            <div className="doc-stat-bg doc-stat-bg-green"></div>
          </div>

          <div className="doc-stat-card doc-stat-card-orange">
            <div className="doc-stat-header">
              <div className="doc-stat-icon doc-stat-icon-orange">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V12L16 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <span className="doc-stat-badge doc-stat-badge-orange">Review</span>
            </div>
            <div className="doc-stat-content">
              <span className="doc-stat-label">Pending</span>
              <span className="doc-stat-value">{documents.filter(d => d.status === 'Pending').length}</span>
            </div>
            <div className="doc-stat-bg doc-stat-bg-orange"></div>
          </div>

          <div className="doc-stat-card doc-stat-card-purple">
            <div className="doc-stat-header">
              <div className="doc-stat-icon doc-stat-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0004 3H3.00037C2.44808 3 2.00037 3.44772 2.00037 4V7C2.00037 7.55228 2.44808 8 3.00037 8H21.0004C21.5527 8 22.0004 7.55228 22.0004 7V4C22.0004 3.44772 21.5527 3 21.0004 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99963 7.99922V18.9992C3.99963 19.5297 4.21035 20.0384 4.58542 20.4134C4.96049 20.7885 5.4692 20.9992 5.99963 20.9992H17.9996C18.5301 20.9992 19.0388 20.7885 19.4138 20.4134C19.7889 20.0384 19.9996 19.5297 19.9996 18.9992V7.99922" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99963 12H13.9996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <span className="doc-stat-badge doc-stat-badge-purple">Storage</span>
            </div>
            <div className="doc-stat-content">
              <span className="doc-stat-label">Total Size</span>
              <span className="doc-stat-value">19.7 MB</span>
            </div>
            <div className="doc-stat-bg doc-stat-bg-purple"></div>
          </div>
        </div>

        {/* Category Cards - 3 in a row */}
        <div className="doc-category-grid">
          <div className="doc-category-card doc-category-card-green">
            <div className="doc-category-icon-wrapper">
              <div className="doc-category-icon doc-category-icon-green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V5.99999C4 5.73478 4.10536 5.48042 4.29289 5.29289C4.48043 5.10535 4.73478 4.99999 5 4.99999C7 4.99999 9.5 3.79999 11.24 2.27999C11.4519 2.09899 11.7214 1.99954 12 1.99954C12.2786 1.99954 12.5481 2.09899 12.76 2.27999C14.51 3.80999 17 4.99999 19 4.99999C19.2652 4.99999 19.5196 5.10535 19.7071 5.29289C19.8946 5.48042 20 5.73478 20 5.99999V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
            </div>
            <div className="doc-category-content">
              <div className="doc-category-header">
                <h3 className="doc-category-title">Compliance Certificates</h3>
                <span className="doc-category-count-badge doc-category-count-badge-green">{getCategoryCount('Compliance')} Docs</span>
              </div>
              <p className="doc-category-description">KYC, AML, And Regulatory Compliance Documents</p>
            </div>
          </div>

          <div className="doc-category-card doc-category-card-blue">
            <div className="doc-category-icon-wrapper">
              <div className="doc-category-icon doc-category-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15L11 17L15 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
            </div>
            <div className="doc-category-content">
              <div className="doc-category-header">
                <h3 className="doc-category-title">Agreements</h3>
                <span className="doc-category-count-badge doc-category-count-badge-blue">{getCategoryCount('Agreements')} Docs</span>
              </div>
              <p className="doc-category-description">Investment Agreements And Legal Contracts</p>
            </div>
          </div>

          <div className="doc-category-card doc-category-card-orange">
            <div className="doc-category-icon-wrapper">
              <div className="doc-category-icon doc-category-icon-orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.5V6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
            </div>
            <div className="doc-category-content">
              <div className="doc-category-header">
                <h3 className="doc-category-title">Tax Reports</h3>
                <span className="doc-category-count-badge doc-category-count-badge-orange">{getCategoryCount('Tax')} Docs</span>
              </div>
              <p className="doc-category-description">Tax Statements And Financial Reports</p>
            </div>
          </div>
        </div>

        {/* Recent Documents Section */}
        <div className="doc-recent-section">
          <div className="doc-recent-header">
            <div className="doc-recent-title-wrapper">
              <h2 className="doc-recent-title">Recent Documents {activeFilter !== 'all' && `/${activeFilter === 'compliance' ? 'compliance certificates' : activeFilter === 'agreements' ? 'Agreements' : 'Tax Reports'}`}</h2>
              <p className="doc-recent-subtitle">{activeFilter === 'all' ? 'Quickly access your latest uploaded documents and reports.' : 'Lorem ipsum'}</p>
            </div>
            <span className="doc-recent-count">{filteredDocuments.length} documents</span>
          </div>

          {/* Filter Tabs and Search */}
          <div className="doc-filters-wrapper">
            <div className="doc-filter-tabs">
              <button 
                className={`doc-filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`doc-filter-tab ${activeFilter === 'compliance' ? 'active' : ''}`}
                onClick={() => setActiveFilter('compliance')}
              >
                Compliance
              </button>
              <button 
                className={`doc-filter-tab ${activeFilter === 'agreements' ? 'active' : ''}`}
                onClick={() => setActiveFilter('agreements')}
              >
                Agreements
              </button>
              <button 
                className={`doc-filter-tab ${activeFilter === 'tax' ? 'active' : ''}`}
                onClick={() => setActiveFilter('tax')}
              >
                Tax
              </button>
            </div>

            <div className="doc-search-wrapper">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="doc-search-icon">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search documents..."
                className="doc-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="doc-search-clear"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Documents List */}
          <div className="doc-list">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="doc-item">
                <div className="doc-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="doc-item-content">
                  <h4 className="doc-item-name">{doc.name}</h4>
                  <div className="doc-item-meta">
                    <span className="doc-item-meta-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6667 1.33398V4.00065" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.33333 1.33398V4.00065" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.33333 6.66602H13.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 2.66602H3C2.63181 2.66602 2.33333 2.9645 2.33333 3.33268V13.3327C2.33333 13.7009 2.63181 13.9993 3 13.9993H13C13.3682 13.9993 13.6667 13.7009 13.6667 13.3327V3.33268C13.6667 2.9645 13.3682 2.66602 13 2.66602Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {doc.category}
                    </span>
                    <span className="doc-item-meta-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.6673C11.6819 14.6673 14.6667 11.6825 14.6667 8.00065C14.6667 4.31875 11.6819 1.33398 8 1.33398C4.3181 1.33398 1.33333 4.31875 1.33333 8.00065C1.33333 11.6825 4.3181 14.6673 8 14.6673Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 4V8L10.6667 9.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {doc.size}
                    </span>
                    <span className="doc-item-meta-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6667 2.66602H3.33333C2.59695 2.66602 2 3.26297 2 3.99935V12.666C2 13.4024 2.59695 13.9993 3.33333 13.9993H12.6667C13.403 13.9993 14 13.4024 14 12.666V3.99935C14 3.26297 13.403 2.66602 12.6667 2.66602Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.6667 1.33398V4.00065" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.33333 1.33398V4.00065" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 6.66602H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {doc.date}
                    </span>
                  </div>
                </div>
                <div className={`doc-item-status ${doc.status.toLowerCase()}`}>
                  {doc.status === 'Verified' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6667 7.38667V8C14.6658 9.43762 14.2003 10.8365 13.3395 11.988C12.4787 13.1394 11.2688 13.9817 9.89022 14.3893C8.51163 14.797 7.03815 14.748 5.68946 14.2497C4.34076 13.7515 3.18996 12.8307 2.40723 11.6247C1.62449 10.4187 1.25317 8.99202 1.34778 7.55763C1.44239 6.12325 1.99812 4.75634 2.93217 3.65532C3.86621 2.5543 5.12852 1.77668 6.53036 1.43735C7.93219 1.09802 9.40026 1.21726 10.7333 1.78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.6667 2.66602L8 9.33935L6 7.33935" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {doc.status === 'Pending' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 4V8L10.6667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {doc.status}
                </div>
                <div className="doc-item-actions">
                  <button 
                    className="doc-item-action-btn"
                    onClick={() => handleViewDocument(doc)}
                    title="View"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833374 10.0003C0.833374 10.0003 4.16671 3.33366 10 3.33366C15.8334 3.33366 19.1667 10.0003 19.1667 10.0003C19.1667 10.0003 15.8334 16.667 10 16.667C4.16671 16.667 0.833374 10.0003 0.833374 10.0003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="doc-item-action-btn"
                    onClick={() => handleDownloadDocument(doc)}
                    title="Download"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.83301 8.33398L9.99967 12.5007L14.1663 8.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="doc-item-action-btn"
                    onClick={() => handleShareDocument(doc)}
                    title="Share"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 6.66667C16.3807 6.66667 17.5 5.54738 17.5 4.16667C17.5 2.78595 16.3807 1.66667 15 1.66667C13.6193 1.66667 12.5 2.78595 12.5 4.16667C12.5 5.54738 13.6193 6.66667 15 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.15833 11.175L12.85 14.6583" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.8417 5.34167L7.15833 8.825" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Preview Modal */}
        {showPreviewModal && selectedDocument && (
          <div className="doc-modal-overlay" onClick={() => setShowPreviewModal(false)}>
            <div className="doc-modal" onClick={(e) => e.stopPropagation()}>
              <div className="doc-modal-header">
                <h3 className="doc-modal-title">{selectedDocument.name}</h3>
                <button 
                  className="doc-modal-close"
                  onClick={() => setShowPreviewModal(false)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="doc-modal-subtitle">Document preview and details</p>
              
              <div className="doc-modal-preview">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.0001 5.33331H16.0001C14.5856 5.33331 13.229 5.89522 12.2288 6.89541C11.2287 7.8956 10.6667 9.25216 10.6667 10.6666V53.3333C10.6667 54.7478 11.2287 56.1044 12.2288 57.1045C13.229 58.1047 14.5856 58.6666 16.0001 58.6666H48.0001C49.4146 58.6666 50.7711 58.1047 51.7713 57.1045C52.7715 56.1044 53.3334 54.7478 53.3334 53.3333V18.6666L40.0001 5.33331Z" stroke="#90A1B9" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.3333 5.33331V16C37.3333 17.4145 37.8952 18.771 38.8954 19.7712C39.8955 20.7714 41.2521 21.3333 42.6666 21.3333H53.3333" stroke="#90A1B9" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6666 24H21.3333" stroke="#90A1B9" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.6666 34.6667H21.3333" stroke="#90A1B9" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.6666 45.3333H21.3333" stroke="#90A1B9" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <p className="doc-modal-preview-title">Document Preview</p>
                <p className="doc-modal-preview-name">{selectedDocument.name}</p>
              </div>

              <div className="doc-modal-details">
                <div className="doc-modal-detail-row">
                  <div className="doc-modal-detail-item">
                    <span className="doc-modal-detail-label">Category</span>
                    <span className="doc-modal-detail-value">{selectedDocument.category}</span>
                  </div>
                  <div className="doc-modal-detail-item">
                    <span className="doc-modal-detail-label">File Size</span>
                    <span className="doc-modal-detail-value">{selectedDocument.size}</span>
                  </div>
                </div>
                <div className="doc-modal-detail-row">
                  <div className="doc-modal-detail-item">
                    <span className="doc-modal-detail-label">Upload Date</span>
                    <span className="doc-modal-detail-value">{selectedDocument.date}</span>
                  </div>
                  <div className="doc-modal-detail-item">
                    <span className="doc-modal-detail-label">Status</span>
                    <span className={`doc-modal-status ${selectedDocument.status.toLowerCase()}`}>
                      {selectedDocument.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="doc-modal-actions">
                <button 
                  className="doc-modal-btn doc-modal-btn-secondary"
                  onClick={() => handleShareDocument(selectedDocument)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6.66667C16.3807 6.66667 17.5 5.54738 17.5 4.16667C17.5 2.78595 16.3807 1.66667 15 1.66667C13.6193 1.66667 12.5 2.78595 12.5 4.16667C12.5 5.54738 13.6193 6.66667 15 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.15833 11.175L12.85 14.6583" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.8417 5.34167L7.15833 8.825" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Share
                </button>
                <button 
                  className="doc-modal-btn doc-modal-btn-primary"
                  onClick={() => handleDownloadDocument(selectedDocument)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83301 8.33398L9.99967 12.5007L14.1663 8.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DocumentsPage;

