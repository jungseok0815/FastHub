import React,{useState} from 'react';
import SearchBar from "./ProductManagementSearchbar";
import Content from "./ProductManagementContent"
import ProductInsertModal from "../../../componets/admin/product/ProductInsertModal"
import "../../../styles/admin/productManagement/ProductManagement.css"
import { InsertButton } from '../../../componets/admin/button/button';
const ProductManagement = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  return <div>
      <SearchBar/>
      <div className='productManagerInsert'>
        <InsertButton onClick={handleOpenModal} children={"상품 등록"}/>
      </div>
      <Content/>
      <ProductInsertModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>;
};

export default ProductManagement;