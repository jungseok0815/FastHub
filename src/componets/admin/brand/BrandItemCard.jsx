import {React, useState} from 'react';
import { Phone, MapPin } from 'lucide-react';
import { SubmitButton, DeleteButton } from '../button/Button';
import { InsertBrand, UpdateBrand, DeleteBrand } from '../../../api/brand';

const BrandItemCard = () => {
    const [formData, setFormData] = useState({
        brandNm : "",
        brandNum : "",
        brandImg : [],
        brandDc : "",
        brandLocation : ""
      });

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        
            setFormData(prev => ({
              ...prev,
              brandImg: file
            }));
            URL.createObjectURL(file);
        } 
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // 여기에 폼 제출 로직 추가
        InsertBrand(formData).then((res) => {
            if(res.status === 200){
                console.log(res.data)
            }
        })
      };
    
      return (
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl  overflow-hidden">
            <div className="flex">
              {/* 왼쪽 로고 섹션 */}
              <div className="w-1/3 bg-gray-50 p-6 flex flex-col items-center justify-center border-r">
                <div className="w-full aspect-square bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
                  {formData.brandImg ? (
                    <img 
                      src={formData.brandImg} 
                      alt="Preview" 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <p className="text-gray-500">로고 이미지 업로드</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
    
              {/* 오른쪽 회사 정보 입력 섹션 */}
              <div className="w-2/3 p-6 space-y-4">
                {/* 회사명 입력 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    회사명
                  </label>
                  <input
                    type="text"
                    name="brandNm"
                    value={formData.brandNm}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="회사명을 입력하세요"
                  />
                </div>
    
                {/* 회사 소개 입력 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    회사 소개
                  </label>
                  <textarea
                    name="brandDc"
                    value={formData.brandDc}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="회사 소개를 입력하세요"
                  />
                </div>
    
                {/* 연락처 정보 입력 */}
                <div className="space-y-3">
                  {/* 전화번호 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>전화번호</span>
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="brandNum"
                      value={formData.brandNum}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="전화번호를 입력하세요"
                    />
                  </div>
    
                  {/* 주소 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>주소</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="brandLocation"
                      value={formData.brandLocation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="주소를 입력하세요"
                    />
                  </div>
                </div>
    
                {/* 제출 버튼 */}
                <div className="pt-4 flex justify-end">
                    <SubmitButton children={"등록"}/>
                    <DeleteButton children={"삭제"}/>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
};


export default BrandItemCard;