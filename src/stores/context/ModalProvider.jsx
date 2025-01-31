// import { useCallback, useContext, useState } from "react"

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//     const [modals, setModals] = useState([]);

//     const openModal = useCallback((config) => {
//         setModals(prev => [...prev, config])
//     },[]);

//     const closeModal = useCallback((id) => {
//         setModals(prev => prev.filter(modal => modal.id !== id));
//       }, []);
    
//     const closeAllModals = useCallback(() => {
//     setModals([]);
//     }, []);

//     return (
//         <ModalContext.Provider value={{ modals, openModal, closeModal, closeAllModals }}>
//           {children}
//           <ModalContainer />
//         </ModalContext.Provider>
//       );
// }

// export const useModal = () => {
//     const context = useContext(ModalContext);
//     if (!context) {
//       throw new Error('useModal must be used within ModalProvider');
//     }
//     return context;
//   };


