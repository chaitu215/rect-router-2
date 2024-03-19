import React , {Component} from 'react'
import './style.css'
import ContactusScreen from './ContactsusScreen'

class ContactUs extends Component{
    render(){
        return(
            <div className='container'>
                <br/>
                <br/>
                <h3>Contact page</h3>
                <address>
                     TCS<br/>
                     Bengaluru <br/>
                     Karnataka 
                </address>
                <p style={{ paddingLeft:'2rem'}}></p>
                <ContactusScreen/>
            </div>
        )
    }
}
export default ContactUs