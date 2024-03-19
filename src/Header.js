import React , {Component} from 'react';
import { NavLink  } from 'react-router-dom';
import './style.css' 

class Header extends Component{
    render(){
        return (
            <div className='header'>
                <div className='container'>
                    <div className='logo'>
                        <NavLink to="/">Logo</NavLink>
                    </div>
                    <div className='navbar'>
                        <ul>
                            <li>
                                <NavLink to ="/" activeStyle={{color: 'black'}}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to ="/about" activeStyle={{color: 'black'}}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ContactUs" activeStyle={{color: 'black'}}>Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery" activeStyle={{color: 'black'}}>Gallery</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='clear'></div>
                </div>
            </div>
        )
    }
}
export default Header