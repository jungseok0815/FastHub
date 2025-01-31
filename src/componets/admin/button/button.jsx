import React from "react";


export const InsertButton = ({onClick, children,type = "button"}) => {
   return(
     <button 
        onClick={onClick}
        type={type}
        className="register-button" 
        >
        {children}
    </button>
   )
}

export const SubmitButton = ({children,type = "submit"}) => {
    return(
      <button 
         type={type}
         className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
         >
         {children}
     </button>
    )
 }

 export const DeleteButton = ({onClick, children, type = "button"}) => {
   return(
      <button 
         onClick={onClick}
         type={type}
         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 disabled:bg-gray-400 transition"
         >
         {children}
     </button>
    )
 }

 export const CancelButton = ({onClick, children, type = "button"}) => {
   return(
      <button 
         type={type}
         onClick={onClick}
         className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
         >
         {children}
     </button>
    )
 }


 