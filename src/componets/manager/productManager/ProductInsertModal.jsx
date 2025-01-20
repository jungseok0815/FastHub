import { Children, useState } from "react";
import Modal from "../../modal/Modal";
import { FiUpload } from "react-icons/fi";
import { BiReset } from "react-icons/bi";
import axios from "axios";
import api from "../../../config/ApiConfig";

const ProductInsertModal = ({isOpen, onClose}) =>{
    const [formData, setFormData] = useState({ 
        productName: "",
        description: "",
        price: "",
        category: "",
        image : null
      });
      
      const [imagePreview, setImagePreview] = useState(null);
      const [errors, setErrors] = useState({});
    
      const categories = [
        "BOTTOM",
      ];
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
     
        setFormData((prev) => ({
          ...prev,
          [name]: value,   // 현재 입력 필드 업데이트
        }));
        validateField(name, value);
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) {
          setFormData((prev) => ({
            ...prev,
            image : file         
          }));
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    
      const validateField = (name, value) => {
        let newErrors = { ...errors };
    
        switch (name) {
          case "productName":
            if (!value.trim()) {
              newErrors.productName = "Product name is required";
            } else {
              delete newErrors.productName;
            }
            break;
          case "price":
            if (!value) {
              newErrors.price = "Price is required";
            } else if (Number(value) <= 0) {
              newErrors.price = "Price must be greater than 0";
            } else {
              delete newErrors.price;
            }
            break;
          case "category":
            if (!value) {
              newErrors.category = "Please select a category";
            } else {
              delete newErrors.category;
            }
            break;
          default:
            break;
        }
    
        setErrors(newErrors);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
    
        if (!formData.productName.trim()) {
          newErrors.productName = "Product name is required";
        }
        if (!formData.price) {
          newErrors.price = "Price is required";
        }
        if (!formData.category) {
          newErrors.category = "Please select a category";
        }
        console.log(formData)
        if (Object.keys(newErrors).length === 0) {
          api.post("/api/product/insert",formData,{
            headers: {
                'Content-Type': 'multipart/form-data'  
              }
      
          }).then(res=>{
            if(res.status === 200) console.log(res.data)
          
            }).catch((err) =>{
                console.log(err)
            })
        } else {
          setErrors(newErrors);
        }
      };
    
      const handleReset = () => {
        setFormData({
          productName: "",
          description: "",
          price: "",
          category: "",
          image: null
        });
        setImagePreview(null);
        setErrors({});
      };


    return (
        <div>
            <Modal
             isOpen={isOpen}
             onClose={onClose}
             width="600px">   
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              상품 등록
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                 * 상품명
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.productName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter product name"
                  aria-label="Product Name"
                />
                {errors.productName && (
                  <p className="mt-1 text-sm text-red-500">{errors.productName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                * 가격
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.price ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter product price"
                  min="0"
                  step="0.01"
                  aria-label="Product Price"
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.category ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  aria-label="Product Category"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-500">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Product Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="mb-4">
                        <img
                          src={imagePreview}
                          alt="Product preview"
                          className="mx-auto h-32 w-32 object-cover rounded-md"
                        />
                      </div>
                    ) : (
                      <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="sr-only"
                          aria-label="Upload Product Image"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register Product
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
      

            </Modal>
        </div>
      );
}
export default ProductInsertModal;