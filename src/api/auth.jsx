import api from './api';

export const postLogin = (loginForm) => {
    return api.post("/api/auth/login", null,{
        params : loginForm
    })
}

export const postJoin = (joinForm) =>{
    return api.post("/api/auth/join", null,{
        params : joinForm
    })    
}