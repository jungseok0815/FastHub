
const ModalLay = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;


    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-white rounded-lg p-8 relative z-10 w-full max-w-lg mx-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>
      </div>

    );
};

export default ModalLay;