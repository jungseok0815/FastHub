import React,{useState, useEffect} from 'react';
import SearchBar from "./ProductManagementSearchbar";
import Content from "./ProductManagementContent"
import ProducttModal from "../../../componets/modal/ProductModal"
import "../../../styles/admin/productManagement/ProductManagement.css"
import { InsertButton } from '../../../componets/admin/button/Button';
import { ListProduct } from '../../../api/product';

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [updateProduct, setUpdateProduct] = useState(false)
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 초기 상품 리스트 조회
  useEffect(() => {fetchProducts()}, [])

  // 상품 변경 시 렌더링
  useEffect(()=> {
    if(updateProduct){
      fetchProducts()
      setUpdateProduct(false)
    }
  },[updateProduct])

  useEffect(()=> {
    
  })

  //product list를 호출하는 api
  const fetchProducts =  async () => {
    try {
        const response = await ListProduct(null);
        setProducts(response.data.data);
    } catch (error) {
        console.error("상품 목록 조회 실패:", error);
    }
  };

  //모달이 열리도록 상태값을 변경
  const handleOpenModal = (selectProduct) => {
    setIsModalOpen(true)
    if(selectProduct){   
      setProduct(selectProduct)
    }else{
      setProduct(null)
    }
};  
  //모달이 닫히도록 상태가을 변경
  const handleCloseModal = () => setIsModalOpen(false);
  
  //상품 등록 수정 삭제 시 바로 반영되도록 상태값을 변경
  const handleUpdateProduct = () => setUpdateProduct(true)

  const handleChangeSearchTerm = (e) => setSearchTerm(e.target.value)


  return <div>
      <SearchBar onChange={handleChangeSearchTerm}/>
      <div className='productManagerInsert'>
        <InsertButton onClick={() => handleOpenModal(false)} children={"상품 등록"}/>
      </div>
      <Content products={products} openModal={handleOpenModal}/> 
      <ProducttModal isOpen={isModalOpen} onClose={handleCloseModal} updateProduct={handleUpdateProduct} product={product}/>
    </div>;
};

export default ProductManagement;