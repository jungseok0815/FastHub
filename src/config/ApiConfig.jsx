import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,  // 쿠키 처리를 위해 필수
})

// api.interceptors.response.use(
//     (response) =>{
//         return response
//     },
//     (error) => {
//         if(error.response && error.response.status === 401){
//             alert("권한 에러 로그인 후 다시 실행해주세요!")
//             window.location.href = '/login'
//         }
//     }
// )

export default api;