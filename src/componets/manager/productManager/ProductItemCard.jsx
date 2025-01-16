import React, { useState } from "react";
import {  FaHeart, FaPlus } from "react-icons/fa";

const ProductItemCard = () => {
  const [favorites, setFavorites] = useState([]);
  // Existing appetizers array and other functions remain unchanged...
  const appetizers = [
    {
      id: 1,
      name: "Bruschetta Classic",
      price: "$12.99",
      description: "Fresh tomatoes, garlic, basil on toasted bread",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      isChefSuggestion: true,
      allergens: ["Gluten", "Dairy"],
      ingredients: "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo: "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      quantity: 0
    },
    // ... rest of the appetizers array remains the same
  ];

  // All existing functions remain the same (addToCart, removeFromCart, updateQuantity, toggleFavorite, handleBack)
  return (
    <div className="min-h-screen bg-gray-950">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {appetizers.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border border-gray-800 hover:border-[#f5a00c]">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">{item.name}</h3>
                      {item.isChefSuggestion && (
                        <span className="bg-[#f5a00c] text-black text-sm px-4 py-1.5 rounded-full font-medium">
                          Sugerencia del chef
                        </span>
                      )}
                    </div>
                    <span className="text-xl font-bold text-[#f5a00c]">{item.price}</span>
                  </div>
                  <p className="text-gray-300 mb-8 text-lg">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => {
                      
                      }}
                      className="bg-[#f5a00c] hover:bg-[#e59200] text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      Ver más
                    </button>
                    
                    <div className="flex space-x-6">
                      <button
                        className={`p-3 rounded-full ${favorites.includes(item.id) ? "text-red-500" : "text-gray-400"} hover:text-red-500 transition-colors duration-300`}
                       > <FaHeart className="text-2xl" />
                      </button>
                      <button 
                        className="p-3 rounded-full bg-[#f5a00c] text-white hover:bg-[#e59200] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                      >
                        <FaPlus className="text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductItemCard;