import React, { useState } from 'react';
import '../../css/manager/searchbarManager.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 검색 입력 처리
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // 부모 컴포넌트에 검색어 전달
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="상품을 입력하세요"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
