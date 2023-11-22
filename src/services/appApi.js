//api to upload viedos.

import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const uploadAllViedos = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/videos`, reqBody);
};

export const getAllViedos = async () => {
  return await commonApi("GET", `${serverUrl}/videos`, "");
};
export const deteVideos = async (id) => {
  return await commonApi("DELETE", `${serverUrl}/videos/${id}`, {})
};

//add to watchhistory
export const addToHistory = async (videoDetails)=>{
  return await commonApi('POST',`${serverUrl}/history`,videoDetails)
}

//to get data from the history

export const getAllHistory =async()=>{
  return await commonApi('GET',`${serverUrl}/history`,"")
}

// api to add to category
 
export const addCateGory=async ()=>{
  return await commonApi('POST',`${serverUrl}/category`)
}

//api to delete history
export const deleteHistory=async (id)=>{
  return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}
// api to add category 
export const addToCategories=async (body)=>{
  return await commonApi('POST',`${serverUrl}/category`,body)
}

//api to get all category 
export const getAllCategory=async ()=>{
  return await commonApi('GET',`${serverUrl}/category`,"")
}
//api to get a video 
export const getVideo  =async (id)=>{
  return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}

// api to update the category
export const updateCategory = async (id,body)=>{
 return await commonApi('PUT',`${serverUrl}/category/${id}`,body)
}

