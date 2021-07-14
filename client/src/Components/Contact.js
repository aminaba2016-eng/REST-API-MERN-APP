import {useDispatch} from 'react-redux'
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {deleteContact,getContact} from '../JS/actions/contacts'
import { toggleTrue } from '../JS/actions/edit'
import {Link} from 'react-router-dom'

const Contact = ({contact}) => {
    const dispatch = useDispatch()
return(
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
         <strong>{contact.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to = {`/edit/${contact._id}`}>
          <Button inverted color='green' onClick={()=>{
              dispatch(getContact(contact._id)) 
            ;dispatch(toggleTrue())}}>                   
              Edit
            
          </Button>
          </Link>
          <Button inverted color='red' onClick={() => dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/molly.png'
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>)
}



export default Contact
