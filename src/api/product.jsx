import api from './api';

export const insertProuct = (insertForm) => {
    return api.post("/api/product/insert", insertForm,{
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    } 
 
)
}

export const updateProduct = (updateForm) =>{
    return api.put("/api/product/update", updateForm, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    }
 
)    
}

export const delteProduct = (productNo) =>{
    return api.delete(`/api/product/delete?id=${productNo}`)
}

export const listProduct =  () =>{
    return  api.get("/api/product/list")    
}