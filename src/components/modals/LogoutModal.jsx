import { useEffect } from 'react';
import './LogoutModal.css';

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Handle ESC key press
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="logout-modal-overlay" onClick={handleBackdropClick}>
      <div className="logout-modal-container">
        <div className="logout-modal-content">
          <h2 className="logout-modal-heading">
            Are you sure you want to logout?
          </h2>
          <p className="logout-modal-subtitle">
            You will be safely logged out of your account and redirected to the login page.
          </p>
          <div className="logout-modal-actions">
            <button 
              className="logout-modal-btn logout-modal-btn--cancel"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
            <button 
              className="logout-modal-btn logout-modal-btn--logout"
              onClick={onConfirm}
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
