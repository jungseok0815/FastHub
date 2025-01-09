import React from "react";
import Navbar from '../../componets/navbar'; // 상단 네비게이션
import Hero from '../../componets/hero'; // 메인 배너
import ProductCard from "../../componets/productCard"; // 상품 카드
import "../../css/App.css";

function App() {
  // 샘플 상품 데이터
  const products = [
    { id: 1, name: "Nike Air Force 1", price: "₩150,000", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Adidas Yeezy Boost", price: "₩300,000", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Jordan 1 Retro High", price: "₩250,000", image: "https://via.placeholder.com/150" },
  ];

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