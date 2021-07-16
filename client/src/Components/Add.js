import React, {useEffect, useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { postContact,editContact } from '../JS/actions/contacts'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'



const Add = () => {
    const [user, setUser] = useState({name:"",email:"",phone:""}) 
    const useReducer = useSelector((state) => state.contactReducer.user)
    const edit = useSelector((state) => state.editReducer.edit)
    const dispatch = useDispatch()
    useEffect(()=>{
    edit? setUser(useReducer):setUser({name:"",email:"",phone:""});
    },[edit,useReducer])
const handleContact = () =>{
    if(!edit)  {
      dispatch(postContact(user))
    } else{
      dispatch(editContact(useReducer._id,user))
    }
}
const handleChange=(e)=>{
  // ma ya3mal 7ata event ma tsirech refresh ll form
  e.preventDefault();
  setUser({...user,[e.target.name]:e.target.value})
}


    return (
      

  <Form>
    <Form.Field>
      <label>name</label>
      <input value = {user.name} placeholder='name' name="name" onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>phone</label>
      <input  value = {user.phone} placeholder='Phone' name = "phone" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>email</label>
      <input  value = {user.email} placeholder='e-mail' name="email" onChange={handleChange} />
    </Form.Field>
    <Link to='/'></Link>
{/* //kif tabda ediit true yaffichi edit sinon yaffichi save */}
    <Button type='submit' onClick={handleContact}>{edit?"Edit": "Save"}</Button>
  </Form>
)

    
}

export default Add
