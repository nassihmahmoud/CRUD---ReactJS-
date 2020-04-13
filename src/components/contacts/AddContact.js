import React, { Component } from 'react'
import {Consumer} from '../context';
import TextinputGroup from '../helpers/TextinputGroup';
import axios from 'axios'
class AddContact extends Component {
    state = {
        name : '',
        tel  : '',
        email : '',
        errors : {}
    }

    onChangeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

 submit = async (dispatch, size, e) => {
     e.preventDefault();
     const {name, tel, email} = this.state;
     if(name==""){
         this.setState({
             errors :{name : "the name is required !"} 
         })
         return;
     }
     if(tel==""){
        this.setState({
            errors :{tel : "the tel is required !"}  
        })
        return;
    }
    if(email==""){
        this.setState({
            errors :{email : "the email is required !"} 
        })
        return;
    }
    const newContact = {
                        name: name,
                        tel: tel,
                        email:email
                       }
            try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContact)
                dispatch({
                    type :  'ADD_CONTACT',
                    payload: res.data
                })
            }catch(e){
                console.log(e)
            }
  


    this.setState({
        name : '',
        tel  : '',
        email : '',
        errors:{}
    })
    this.props.history.push('/');
   
 }
    render() {
        const {name, tel, email, errors} = this.state;

        return(
            <Consumer>
            {value =>{
                const {dispatch} = value;
return (
           
     <div>
         <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
               <div className="card">
                   <div className="card-body">
                       <h4 className="card-title">Add Contact</h4>
                       <div className="card-text">
                       
                          <TextinputGroup  
                                label="Nom" 
                                name='name' 
                                type='text'
                                value={name}  
                                onChange={this.onChangeInput} 
                                errors={errors.name}
                                />

                            <TextinputGroup  
                            label="Téléphone" 
                            name='tel' 
                            type='text'
                            value={tel} 
                            onChange={this.onChangeInput} 
                            errors={errors.tel}
                            />

                        
                            <TextinputGroup  
                            label="Email" 
                            name='email'
                            type='email'
                            value={email} 
                            onChange={this.onChangeInput} 
                            errors={errors.email}
                            />

                            <button type="submit"  className="btn btn-success btn-block">Add New Contact</button>      
                       </div>
                   </div>
               </div>
           </form>   
     </div>
        )
                     }
            }
            </Consumer>
        )
        
    }
}
export default AddContact