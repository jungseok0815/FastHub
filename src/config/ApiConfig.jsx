import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,  // 쿠키 처리를 위해 필수
})

// api.interceptors.response.use(
//     (response) =>{
//         return response
//     },
//     (error) => {
//         if(error.response && error.response.status === 401){
//             alert("권한 에러 로그인 후 다시 실행해주세요!")
//             window.location.href = '/login'
//         }
//     }
// )

export default api;



// <div className="col-span-2">
// <label className="block text-sm font-medium text-gray-700 mb-2">
//    상품명
//  </label>
//    <input
//      type="text"
//      id="productName"
//      name="productName"
//      value={formData.productName}
//      onChange={handleInputChange}
//      className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.productName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
//      placeholder="Enter product name"
//      aria-label="Product Name"
//    />
//    {errors.productName && (
//      <p className="mt-1 text-sm text-red-500">{errors.productName}</p>
//    )}
//  </div>

//  <div>
//    <label
//      htmlFor="price"
//      className="block text-sm font-medium text-gray-700"
//    >
//    * 가격
//    </label>
//    <input
//      type="number"
//      id="price"
//      name="price"
//      value={formData.price}
//      onChange={handleInputChange}
//      className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.price ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
//      placeholder="Enter product price"
//      min="0"
//      step="0.01"
//      aria-label="Product Price"
//    />
//    {errors.price && (
//      <p className="mt-1 text-sm text-red-500">{errors.price}</p>
//    )}
//  </div>

//  <div>
//    <label
//      htmlFor="category"
//      className="block text-sm font-medium text-gray-700"
//    >
//      Category *
//    </label>
//    <select
//      id="category"
//      name="category"
//      value={formData.category}
//      onChange={handleInputChange}
//      className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.category ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
//      aria-label="Product Category"
//    >
//      <option value="">Select a category</option>
//      {categories.map((category) => (
//        <option key={category} value={category}>
//          {category}
//        </option>
//      ))}
//    </select>
//    {errors.category && (
//      <p className="mt-1 text-sm text-red-500">{errors.category}</p>
//    )}
//  </div>
 
//  <div className="flex justify-end  space-x-4">
//    <button
//      type="submit"
//      className="w-1/5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//    >
//      등록
//    </button>
//    <button
//      type="button"
//      onClick={handleReset}
//      className="w-1/5 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//    >
//      초기화
//    </button>
//  </div>