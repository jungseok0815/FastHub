import api from './api';

export const InsertProuct = (insertForm) => {
    return api.post("/api/product/insert", insertForm,{
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    } 
 
)
}

export const UpdateProduct = (updateForm) =>{
    return api.put("/api/product/update", updateForm, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    }
 
)    
}

export const DelteProduct = (productNo) =>{
    return api.delete(`/api/product/delete?id=${productNo}`)
}

export const ListProduct =  (keyword) =>{   
    if(keyword === null) return api.get(`/api/product/list`)    
    return api.get(`/api/product/list?keyword=${keyword}`)  
    }