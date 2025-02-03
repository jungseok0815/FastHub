import React from "react";

export const SearchBar = ({onChange,value, children, width="500px", placeholder="검색어를 입력하세요요"}) => {
    return(
        <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ width: width,  fontSize: "16px" }}
        />
      </form>
    )
 }