import api from './api';

export const InsertBrand = (insertForm) => {
    return api.post("/api/brand/insert", insertForm,{
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    } 
)
}

export const UpdateBrand = (updateForm) =>{
    return api.put("/api/brand/update", updateForm, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    }
)    
}

export const DeleteBrand = (productNo) =>{
    return api.delete(`/api/brand/delete?id=${productNo}`)
}

export const ListBrand =  (keyword) =>{   
    if(keyword === null) return api.get(`/api/product/list`)    
    return api.get(`/api/brand/list?keyword=${keyword}`)  
    }