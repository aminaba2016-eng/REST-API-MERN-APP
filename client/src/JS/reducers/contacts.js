//import des constants
import {
    GET_CONTACT,
GET_CONTACTS_FAIL,
 GET_CONTACTS_LOAD,
 GET_CONTACTS_SUCESS,EDIT_CONTACT
} from "../constants/contacts"
//Initial STATE
const initialState={
    contacts : [],
    loadContacts:false,
    errors: null, 
    user:{},
    editContact:""
};
//Action c'est un objet faha type wel payload
export const contactReducer=(state=initialState,{type,payload})=>{
    switch(type){
        //chnoi bech ta3mal w traj3elnna kol wa7da comme etant modification
        case GET_CONTACTS_FAIL:return{...state,loadContacts:false, erros:payload}
        case GET_CONTACTS_LOAD:return{...state,loadContacts:true}
        case GET_CONTACTS_SUCESS:return{...state,contacts:payload,loadContacts:false}
        case GET_CONTACT: return{...state,user:payload}
        case EDIT_CONTACT:return{...state,editContact:payload}
        default:
             return state; 
    }
}
