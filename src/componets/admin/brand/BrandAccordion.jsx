import {React, useState} from 'react';
import { ChevronDown } from 'lucide-react';
import BrandItemCard from './BrandItemCard';

const BrandAccordion = ({ brand, id }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
        <div key={id} className="border rounded-lg overflow-hidden">
        <button
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleAccordion(id)}
        >
            <div className="flex-1 text-center">
              <span className="font-medium">{brand.title}</span>
            </div>
            <ChevronDown
            className={`w-5 h-5 transform transition-transform ${
                activeIndex === id ? 'rotate-180' : ''
            }`}
            />
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ${
            activeIndex === id 
                ? 'max-h-68 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
        >
            <div className="bg-gray-50 p-2">
                <BrandItemCard brand={brand}/>
            </div>
        </div>
        </div>
    );
};


export default BrandAccordion;