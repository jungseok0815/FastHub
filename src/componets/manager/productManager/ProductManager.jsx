import React,{useState} from 'react';
import SearchBar from "./ProductManagerSearchbar";
import Content from "./ProductManagerContent"
import ProductInsertModal from "./ProductInsertModal"
import "../../../css/manager/productManager/ProductManager.css"
const ProductManagement = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleProductRegister =() =>{

  }

  return <div>
      <SearchBar/>
      <div className='productManagerInsert'>
        <button className="register-button" onClick={handleOpenModal}>
            상품 등록
          </button>
      </div>
      <Content/>
      <ProductInsertModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </div>;
};

export default ProductManagement;