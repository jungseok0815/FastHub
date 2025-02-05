import React, { useState } from "react";
import "../../../styles/admin/productManagement/ProductManagementSearchbar.css"
import { SearchBar } from "../../../componets/admin/searchbar/Searchbar";
const ProductManagerSearchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };

  return (
    <nav className="productManagerSearchbar">
      <div className="navbar-content">
        <SearchBar 
            onKeyup={handleSearchChange}
            placeholder="브랜드명을 입력하세요"
            value={searchTerm}
            width="500px"
        />
      </div>
    </nav>
  )
 
};

export default ProductManagerSearchbar;