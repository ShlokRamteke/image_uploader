import {commonrequest} from "./ApiCall"

const  BASE_URL=process.env.REACT_APP_BASE_URLS;


export const addUserDataAPI = async(formData,header)=>{
    return await commonrequest("POST",`${BASE_URL}/register`,formData,header);
}

export const getUserDataAPI = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/getdata`,header);
}



export const deletfuncAPI = async(id, header)=>{
    return await commonrequest("DELETE",`${BASE_URL}/${id}`,{});
}

