
import {React, useState} from "react";
import '../../styles/admin/AdminMainPage.css';
// 동적 컴포넌트 import
import ProductManagement from '../admin/productManagement/ProductManagement';
import BrandManagement from '../admin/brandManagement/BrandManagement';
import OrderManagement from '../admin/orderManagement/OrderManagement';
import SalesManagement from '../admin/saleManagement/SalesManagement';
function Admin(){
  const [activePage, setActivePage] = useState('상품 관리');

  // 메뉴에 따른 컴포넌트 동적 렌더링
  const renderContent = () => {
    switch (activePage) {
      case '상품 관리':
        return <ProductManagement />;
      case '브랜드 관리':
        return <BrandManagement />;
      case '주문 관리':
        return <OrderManagement />;
      case '매출 관리':
        return <SalesManagement />;
      default:
        return <div>잘못된 요청입니다.</div>;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar_manager">
        <nav className="navbar-menu">
          <span
            className={`nav-link ${activePage === '상품 관리' ? 'active' : ''}`}
            onClick={() => setActivePage('상품 관리')}
          >
            상품 관리
          </span>
          <span
            className={`nav-link ${activePage === '브랜드 관리' ? 'active' : ''}`}
            onClick={() => setActivePage('브랜드 관리')}
          >
            브랜드 관리
          </span>
          <span
            className={`nav-link ${activePage === '주문 관리' ? 'active' : ''}`}
            onClick={() => setActivePage('주문 관리')}
          >
            주문 관리
          </span>
          <span
            className={`nav-link ${activePage === '매출 관리' ? 'active' : ''}`}
            onClick={() => setActivePage('매출 관리')}
          >
            매출 관리
          </span>
        </nav>
      </header>

      {/* Content */}
      <div className="content-container">{renderContent()}</div>
    </div>
  );
}
export default Admin;