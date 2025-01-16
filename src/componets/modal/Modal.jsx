import React from 'react';
import { X } from 'lucide-react';

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  heading: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px'
  }
};

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  width = '500px',
  showCloseButton = true
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={styles.modalOverlay} onClick={handleOverlayClick}>
      <div style={{ ...styles.modalContent, maxWidth: width }}>
        <div style={styles.modalHeader}>
          <h2 style={styles.heading}>{title}</h2>
          {showCloseButton && (
            <button onClick={onClose} style={styles.closeButton}>
              <X />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;