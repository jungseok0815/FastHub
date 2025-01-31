import {useState,useEffect } from "react";
import Modal from "./Modal";
import { insertProuct, updateProduct, delteProduct} from "../../api/product";
import { ImagePlus } from 'lucide-react'
import { CancelButton, DeleteButton, SubmitButton } from "../admin/button/button";

const ProductModal = ({ isOpen, onClose, product }) => {

    const [formData, setFormData] = useState({
    id : "",
    productNm: "",
    productPrice : "",
    productQuantity : "",
    productBrand : "",
    productCode : "",
    category: "",
    image: []
  });

  const [imagePreview, setImagePreview] = useState([]);

  useEffect(() => {
    if (product) {
      setFormData({
        id : product.id || "",
        productNm: product.productNm || "",
        productPrice: product.productPrice || "",
        productQuantity: product.productQuantity || "",
        productBrand: product.productBrand || "",
        productCode: product.productCode || "",
        category: product.category || "",
        image: []
      });

      if(product.images.length > 0){
        const produtImgs = product.images.map((img) => {
         return `http://localhost:8080/api/img/get?imgNm=${img.imgNm}`
        })
        setImagePreview(produtImgs)
      }

    }


}, [product])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if(files.length > 4) return alert("사진은 최대 4장 등록 가능합니다!") 
    if (files) {
      setFormData((prev) => ({
        ...prev,
        image: files
      }));
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setImagePreview(previewUrls);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
      insertProuct(formData)
      .then(res => {
        if (res.status === 200) {
          alert("상품등록 성공!")
          onClose();
        }
      }).catch((err) => {
        alert("상품등록 실패")
        console.log(err)
      })
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(formData).
      then(res => {
      if (res.status === 200) {
        alert("상품 수정 성공!")
        onClose();
      }
    }).catch((err) => {
      alert("상품 수정 실패")
      console.log(err)
    })
  }

  const handlerDeleteProduct = (e) => {
    e.preventDefault();
    if(window.confirm("해당 상품을 삭제 하시겠습니까?")){
      delteProduct(formData.id)
      .then(res => {
        if (res.status === 200) {
          alert("상품 삭제 성공!")
          onClose();
        }
      }).catch((err) => {
        alert("상품 삭제 실패")
        console.log(err)
      })
    }

  }
  
  return (
    <div >
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        width="800px"
        height="500px">
        <div className="bg-white rounded-lg w-full max-w-4xl">
         <form  onSubmit={product ? handleUpdate : handleSubmit} className="p-6">
            <h2 className="text-2xl font-semibold mb-4">상품 등록</h2>

            <div className="flex gap-6">
              {/* 왼쪽: 이미지 업로드 섹션 */}
              <div className="w-1/3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  상품 이미지
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      id="imageUpload"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="imageUpload"
                      className="block w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <ImagePlus className="w-8 h-8 text-gray-400" />
                        <span className="mt-2 text-sm text-gray-500">이미지를 추가하세요</span>
                        <span className="mt-1 text-xs text-gray-400">
                          (최대 5MB, jpg/png 파일)
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="preview-container flex" style={{ marginTop: "20px" }}>
                    {imagePreview.map((url, index)=>{
                      return(
                        <div className="h-16 mr-4 w-16 bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src={url}
                          key={"productImg"+index}
                          alt={`preview-${index}`}
                          className="w-full h-full object-cover"
                        />
                        </div>
                        )
                    })}
                  </div>
                  <p className="text-xs text-gray-500">
                    * 이미지는 최대 4장까지 등록 가능합니다.
                  </p>
                </div>
              </div>

              {/* 오른쪽: 상품 정보 입력 폼 */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      상품명
                    </label>
                    <input
                      type="text"
                      name="productNm"
                      value={formData.productNm}
                      onChange={handleChange}
                      placeholder="상품명을 입력하세요"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      카테고리
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">선택하세요</option>
                      <option value="TOP">상의</option>
                      <option value="BOTTOM">하의</option>
                      <option value="OUTER">아우터</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      브랜드
                    </label>
                    <input
                      type="text"
                      name="productBrand"
                      value={formData.productBrand}
                      onChange={handleChange}
                      placeholder="브랜드명 입력"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      상품코드
                    </label>
                    <input
                      type="text"
                      name="productCode"
                      value={formData.productCode}
                      onChange={handleChange}
                      placeholder="상품코드 입력"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      수량
                    </label>
                    <input
                      type="number"
                      name="productQuantity"
                      value={formData.productQuantity}
                      onChange={handleChange}
                      placeholder="수량 입력"
                      min="0"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      가격
                    </label>
                    <input
                      type="number"
                      name="productPrice"
                      value={formData.productPrice}
                      onChange={handleChange}
                      placeholder="가격 입력"
                      min="0"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="mt-16 flex justify-end space-x-2">
              {!product  && (
                <SubmitButton children={"등록"}/>
              )}
              {product  && (
                <SubmitButton children={"수정"}/>
              )}
               {product  && (
                <DeleteButton onClick={handlerDeleteProduct} children={"삭제"}/>
              )}
              <CancelButton onClick={onClose} children={"취소"}/>
  
            </div>
              </div>
            </div>

           
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default ProductModal;