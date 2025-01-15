import { Children, useState } from "react";
import ModalLay from "../../modal/modalLay";
const ProductInsertModal = ({isOpen, onClose, children}) =>{
    if (!isOpen) return null;

    return (
        <div>
            <ModalLay/>
        </div>
      );
}