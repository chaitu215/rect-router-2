import React , {Component} from 'react';
import './style.css'
import TableData from './TableData';

class About extends Component{
    render(){
        return(
            <div className='container'>
                <br/>
                <br/>
                <h3> About us page</h3>
                <p> TCS is a software company </p>
                <TableData />
            </div>
        )
    }
}
export default About