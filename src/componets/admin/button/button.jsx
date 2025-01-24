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
         className="submit-button"
         >
         {children}
     </button>
    )
 }

 