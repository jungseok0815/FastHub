import React from 'react';
import BrandManagementSearchbar from "./BrandManagementSearchbar"
import { InsertButton } from '../../../componets/admin/button/Button';
const BrandManagement = () => {
  const handleOpenModal = () =>{
    console.log("testOpenModal")
  }
 

  return <div>
      <BrandManagementSearchbar />
      <div className='productManagerInsert'>
          <InsertButton onClick={handleOpenModal} children={"브랜드 등록"}/>
      </div>
  </div>;
};

export default BrandManagement;
