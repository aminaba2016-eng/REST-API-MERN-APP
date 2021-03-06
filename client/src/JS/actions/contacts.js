import 
{GET_CONTACTS_FAIL,
GET_CONTACTS_LOAD,
GET_CONTACTS_SUCESS,
DELETE_CONTACT,
GET_CONTACT,
POST_CONTACT,
EDIT_CONTACT} 
from "../constants/contacts"
import axios from "axios"




export const getContacts=()=>async (dispatch)=>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result =await axios.get("/api/contacts/")
        dispatch({type:GET_CONTACTS_SUCESS,payload:result.data.response})

    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL,payload:error})

    }
    }
export const deleteContact = (id) => (dispatch)=>{
    axios
    .delete(`/api/contact/${id}`)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err));
}

export const getContact = (id) => (dispatch)=>{
    axios
    .get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_CONTACT, payload: res.data.response}))
    .catch((err)=>console.log(err))
}

export const postContact = (user) => (dispatch)=>{
    axios
    .post('/api/contact/',user)
    .then(res=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}

export const editContact = (id,user) => (dispatch)=>{
    axios
    .put(`/api/contact/${id}`,user)
    .then(res=>{
        dispatch({type:EDIT_CONTACT, payload:res.data.message})
    })
      .then (dispatch(getContacts()))
      .catch((err)=>console.log(err))
}
