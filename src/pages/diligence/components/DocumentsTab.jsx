import { useState, useMemo, useCallback } from 'react';
import './DocumentsTab.css';

export default function DocumentsTab({ isDarkMode, sidebarCollapsed }) {
  const [query, setQuery] = useState('');

  const docs = useMemo(() => [
    { id: 1, title: 'Due Diligence Report (Crescent GreenTech SPV Ltd.)', category: 'Due Diligence', size: '2.4 MB', date: 'Nov 5, 2025' },
    { id: 2, title: 'Financial Model – 10 Year Projection', category: 'Financial', size: '2.4 MB', date: 'Nov 5, 2025' },
    { id: 3, title: 'Risk Memorandum & Sensitivity Analysis', category: 'Risk', size: '2.4 MB', date: 'Nov 5, 2025' },
    { id: 4, title: 'Shariah Opinion (Independent Scholar Review)', category: 'Shariah', size: '2.4 MB', date: 'Nov 5, 2025' },
    { id: 5, title: 'Legal Structure Documentation', category: 'Legal', size: '2.4 MB', date: 'Nov 5, 2025' },
    { id: 6, title: 'Board Meeting Minutes Q4 2025', category: 'Governance', size: '2.4 MB', date: 'Nov 5, 2025' },
  ], []);

  const filtered = docs.filter(d => d.title.toLowerCase().includes(query.trim().toLowerCase()));

  const handleDownload = useCallback((doc) => {
    // Generate a simple placeholder file for download. Replace with real file URL when available.
    const content = `Placeholder for document: ${doc.title}\nCategory: ${doc.category}\nDate: ${doc.date}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const filename = doc.title.replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '') + '.txt';
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className={`em-docs-root ${isDarkMode ? 'em-docs--dark' : ''} ${sidebarCollapsed ? 'em-docs--wide' : ''}`}>
      <header className="em-docs-header">
        <div>
          <h2 className="em-docs-title">Investor Reports & Documents</h2>
          <p className="em-docs-sub">Quickly access your latest documents and reports.</p>
        </div>

        <div className="em-docs-count">{docs.length} documents</div>
      </header>

      <div className="em-docs-search-wrap">
        <div className="em-docs-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            aria-label="Search documents"
            placeholder="Search documents..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      <ul className="em-docs-list" role="list">
        {filtered.map(doc => (
          <li key={doc.id} className="em-docs-item" role="listitem">
            <div className="em-docs-item-left">
              <div className="em-docs-icon">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5007 1.66675H5.00065C4.55862 1.66675 4.1347 1.84234 3.82214 2.1549C3.50958 2.46746 3.33398 2.89139 3.33398 3.33341V16.6667C3.33398 17.1088 3.50958 17.5327 3.82214 17.8453C4.1347 18.1578 4.55862 18.3334 5.00065 18.3334H15.0007C15.4427 18.3334 15.8666 18.1578 16.1792 17.8453C16.4917 17.5327 16.6673 17.1088 16.6673 16.6667V5.83341L12.5007 1.66675Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.666 1.66675V5.00008C11.666 5.44211 11.8416 5.86603 12.1542 6.17859C12.4667 6.49115 12.8907 6.66675 13.3327 6.66675H16.666" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33268 7.5H6.66602" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3327 10.8333H6.66602" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3327 14.1667H6.66602" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>

              <div className="em-docs-meta">
                <div className="em-docs-name">{doc.title}</div>
                <div className="em-docs-mono">{doc.category} • {doc.size} • {doc.date}</div>
              </div>
            </div>

            <div className="em-docs-actions">
              <button className="em-action-btn" aria-label={`View ${doc.title}`} title="View">
               <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_548_215)">
<path d="M11.3737 16.232C11.3181 16.0823 11.3181 15.9177 11.3737 15.768C11.9148 14.4559 12.8334 13.334 14.0129 12.5446C15.1924 11.7552 16.5797 11.3337 17.999 11.3337C19.4183 11.3337 20.8057 11.7552 21.9852 12.5446C23.1647 13.334 24.0832 14.4559 24.6244 15.768C24.6799 15.9177 24.6799 16.0823 24.6244 16.232C24.0832 17.5441 23.1647 18.666 21.9852 19.4554C20.8057 20.2448 19.4183 20.6663 17.999 20.6663C16.5797 20.6663 15.1924 20.2448 14.0129 19.4554C12.8334 18.666 11.9148 17.5441 11.3737 16.232Z" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14C16.8954 14 16 14.8954 16 16C16 17.1046 16.8954 18 18 18Z" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_548_215">
<rect width="16" height="16" fill="white" transform="translate(10 8)"/>
</clipPath>
</defs>
</svg>

              </button>

              <button type="button" className="em-action-btn" aria-label={`Download ${doc.title}`} title="Download" onClick={() => handleDownload(doc)}>
               <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 18V10" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 18V20.6667C24 21.0203 23.8595 21.3594 23.6095 21.6095C23.3594 21.8595 23.0203 22 22.6667 22H13.3333C12.9797 22 12.6406 21.8595 12.3905 21.6095C12.1405 21.3594 12 21.0203 12 20.6667V18" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.666 14.6667L17.9993 18.0001L21.3327 14.6667" stroke="#121212" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </button>

              <button className="em-action-btn" aria-label={`Share ${doc.title}`} title="Share">
               <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_548_191)">
<path d="M22 13.3333C23.1046 13.3333 24 12.4378 24 11.3333C24 10.2287 23.1046 9.33325 22 9.33325C20.8954 9.33325 20 10.2287 20 11.3333C20 12.4378 20.8954 13.3333 22 13.3333Z" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18C15.1046 18 16 17.1046 16 16C16 14.8954 15.1046 14 14 14C12.8954 14 12 14.8954 12 16C12 17.1046 12.8954 18 14 18Z" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22.6667C23.1046 22.6667 24 21.7713 24 20.6667C24 19.5622 23.1046 18.6667 22 18.6667C20.8954 18.6667 20 19.5622 20 20.6667C20 21.7713 20.8954 22.6667 22 22.6667Z" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7266 17.0066L20.2799 19.6599" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2732 12.3401L15.7266 14.9934" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_548_191">
<rect width="16" height="16" fill="white" transform="translate(10 8)"/>
</clipPath>
</defs>
</svg>

              </button>
            </div>
          </li>
        ))}

        {filtered.length === 0 && (
          <li className="em-docs-empty">No documents found</li>
        )}
      </ul>
    </div>
  );
}
