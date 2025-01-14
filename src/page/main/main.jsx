
import React, { useEffect  } from "react";
import axios from 'axios';
import Navbar from '../../componets/user/navbar'; // 상단 네비게이션
import Hero from '../../componets/user/hero'; // 메인 배너
import ProductCard from "../../componets/user/productCard"; // 상품 카드
import "../../css/App.css";

function App() {
  // 샘플 상품 데이터
  const products = [
    { id: 1, name: "Nike Air Force 1", price: "₩150,000", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Adidas Yeezy Boost", price: "₩300,000", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Jordan 1 Retro High", price: "₩250,000", image: "https://via.placeholder.com/150" },
  ];

  useEffect(() => {
    // 컴포넌트 마운트 시 한 번만 실행
    checkAuth();
  }, []); // 빈 배열을 전달하여 최초 1회만 실행

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/validate', {
        withCredentials: true // 쿠키 포함
      });
      console.log(response.data)
      console.log(response.data.data.userInfoDto.userId)
      if (response.data.authenticated) {
        // 인증 성공 처리
        console.log('인증된 사용자:', response.data);
      }
    } catch (error) {
      // 에러 처리
      console.error('인증 체크 실패:', error);
    }
  };


  return (
    <div className="app">
      {/* 상단 네비게이션 */}
      <Navbar />
      
      {/* 메인 배너 섹션 */}
      <Hero />
      
      {/* 상품 카드 리스트 */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;