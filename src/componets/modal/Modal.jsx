import React from 'react';

const Modal = ({ isOpen, onClose, children, width = "1000px", height = '500px' }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-lg shadow-xl relative"
          style={{ width: width, height : height ,maxWidth: '100%', maxHeight: '90vh' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="overflow-auto  h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;