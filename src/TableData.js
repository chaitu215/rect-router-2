import React , {Component} from "react";
import './style.css'
import axios from 'axios'
class TableData extends Component {
    constructor(){
        super()
        this.state = {
            apiData : []
        }
    }

    async componentDidMount(){
        console.log()
        axios.get('http://hn.algolia.com/api/v1/search_by_date')
            .then((res) => {
                console.log(res.data)
                this.setState({apiData : res.data.hits })
            }) 
    }

    render(){
        console.log(this.state.apiData)
        return(
            <div style={{ width:'100%' , height: '100%'}}>
                <div style={{ width: '100%' , height: '50%'}}>
                    <label style={{border: '3px solid black'
                                    ,width: '100%'
                                    ,height: '10%' , fontSize: 20 }}>Table data
                                    </label>
                    <table className="table" id = 'tableId'>
                        <thead className="tableHeader">
                            <th style={{ height: '50px', backgroundColor: 'lightblue'}}>
                                Author
                            </th>
                            <th style={{ height: '50px', backgroundColor: 'lightblue'}}>
                                Story Id
                            </th>
                            <th style={{ height: '50px', backgroundColor: 'lightblue'}}>
                                Story Title
                            </th>
                            <th style={{ height: '50px', backgroundColor: 'lightblue'}}>
                                Comments
                            </th>
                        </thead>
                        <tbody>
                            {this.state.apiData.map(obj => {
                                return (
                                    <tr>
                                        <td>{obj.author}</td>
                                        <td> {obj.story_id}</td>
                                        <td> {obj.story_title}</td>
                                        <td>{obj.comment_text}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                      
                    </table>
                </div>
            </div>
        )
    }
}
export default TableData