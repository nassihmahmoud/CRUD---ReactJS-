import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();
const reducer =(state,action) => {
     switch (action.type) {
         case 'DELETE_CONTACT':
             return {
                 contacts : state.contacts.filter((contact) => contact.id !== action.payload)
             }
             break;
         case 'ADD_CONTACT':
             return {
                contacts: [action.payload,...state.contacts]
             }
             break; 
         case 'Edit_CONTACT':
             return {
                contacts: state.contacts.map(contact => contact.id === action.payload.id ?  contact = action.payload : contact )
             }
             break;     
         default:
              return state;
             break;
     }
 }
export  class Provider extends Component {
     state = {
       contacts : [
             {id:1, name:'nassih mahmoud', tel:'0691442443', email: 'mnassih@ombidata.ma'},
             {id:2, name:'nassih rayan', tel:'0691442442', email: 'rnassih@ombidata.ma'},
             {id:3, name:'nassih jad', tel:'0691442441', email: 'jnassih@ombidata.ma'},
             {id:4, name:'nassih elyes', tel:'0691442440', email: 'enassih@ombidata.ma'}
        ],
        dispatch : action => this.setState(state => reducer(state, action))
    }
   async componentDidMount(){
       try{
            const res =  await axios.get('https://jsonplaceholder.typicode.com/users')
                    this.setState({
                            contacts : res.data
                        })
       }catch(e){
           console.log(e);
       }
      
    }
    render() {
        return (
            <div>
                <Context.Provider  value={this.state}>
                        {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;
