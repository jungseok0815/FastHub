import React from "react";
import BrandAccordion from "../../../componets/admin/brand/BrandAccordion";
import BrandInsertAccordion from "../../../componets/admin/brand/BrandInsertAccordion";
const BrandManagementContent = ({brandList}) => {
    const items = [
        {
          title: '999휴머니티',
          content: '첫 번째 섹션의 내용입니다. 이곳에 원하는 내용을 자유롭게 작성할 수 있습니다.'
        },
        {
          title: '해칭룸',
          content: '두 번째 섹션의 내용입니다. 텍스트, 이미지, 다른 컴포넌트 등을 넣을 수 있습니다.'
        },
        {
          title: '나이키',
          content: '세 번째 섹션의 내용입니다. 아코디언은 콘텐츠를 깔끔하게 정리하는데 도움이 됩니다.'
        }
      ];

  return (
   <div className="productManagerContent overflow-scroll px-[20px] scrollbar-hide" >
      <div className="container mx-auto  px-4 py-7">
        <h2 className="text-xl font-bold text-gray-500 mb-6">목록</h2>
         <div className='productManagerInsert'>
      </div>
        <div className="grid">
        <div className="w-full mx-auto p-4 space-y-2">
            <BrandInsertAccordion />
        {items.map((item, index) => (
            <BrandAccordion brand={item} id={index}/>
        ))}
        </div>
        </div>
      </div>
   </div>
  )
 
};

export default BrandManagementContent;