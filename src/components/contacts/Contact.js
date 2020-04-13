import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './contact.css';
import { Consumer } from '../context';
import { Link } from 'react-router-dom'

class Contact extends Component {
    state = {
        showCotactToggle : false
    }
   showContact(message){
       console.log('salam ' + message);
       this.setState({
        showCotactToggle : !this.state.showCotactToggle
       })
   }
   onDeleteClick = async (id,dispatch) => {
            try{
                const res = await  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`) 
                dispatch({
                    type  : 'DELETE_CONTACT',
                    payload : id
                })
            }catch(e){
                console.log(e);
            }
   }
//    editContactClick = (id,dispatch) => {
       
//    }
    render() {
        const {id,name, tel, email} = this.props.data;
        return (
            <Consumer>
            {value => {
                const { dispatch } = value;
                return(
                 <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                            {name} <i onClick={this.showContact.bind(this,name)} 
                            className="fa fa-sort-down" aria-hidden="true"></i>
                            
                            <i onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                    style={{color:'red',float:'right',cursor:'pointer'}} 
                                    className="fa fa-times" 
                                    aria-hidden="true">
                            </i>
                         <Link to={`/contact/edit/${id}`}>
                            <i className="fa fa-edit" style={{float:'right',cursor:'pointer'}} 
                              ></i> 
                         </Link>
                            </h4>
                            <div className="card-text">
                        {this.state.showCotactToggle ?
                            <ul className="list-group">
                                                <li className="list-group-item">Tel: {tel}</li>
                                                <li className="list-group-item">Email: {email}</li>
                                            </ul>
                            : null
                        }
                            

                            </div>
                        </div>
                   </div>   
                )
            }}
                
                    
             
            </Consumer>
        )
    }
}
Contact.defaultProps = {
    name : "fatim zahra",
    tel : "123456789",
    email : "test@omnidata.ma"
}
Contact.propTypes = {
    data :PropTypes.object.isRequired,
}
export default Contact;
