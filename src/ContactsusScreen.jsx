import React, {useState}from 'react'
import {Label , FormControl , FormGroup } from 'react-bootstrap'

// Bootstrap is a third party framework , used to style the html components 
// Bootstrap will make webdesign responsive and rich look 
const  ContactusScreen = () => {
    const [data,setData] = useState({})
    // useState is a hook , came from react 16.8 onwards 
    // this.state = {
    //     data : {}
    // }
    // setData will always have updated data of the state 
    let arrData = []
    const handleChange = (e) =>{
        data.message = 'data submitted'
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        // newData['name'] = 'ram'
        // newData['password'] = '123456'
        // newData['email']= 'abc@gmail.com'
        // newData = {
        //     name : 'ram',
        //     password : 12345,
        //     email : abc@gmail.com
        // }
        console.log(newData)
        setData(newData) // this.setState({data : <value>})
        // newData will have all updated information entered in text boxes 
        arrData.push(data)
    }

    return(
        <div>
            <h1>Send Account details </h1>
            <FormGroup style={{border: '1px solid black',
                    padding: '1rem',
                    borderRadius: '1rem',
                    backgroundColor: 'lightblue'
                    }}>
                    <Label style={{ fontSize: '2rem'}}
                     htmlFor = 'name'>Name</Label>
                    <span style= {{ padding: '2rem' , }}></span>
                     <FormControl type="text"
                     style={{ height: '2rem' , borderRadius: '1rem' }}
                     name="name"
                     value={data.name}
                     placeholder= "enter name"
                     required
                     onChange={handleChange}
                    >
                    </FormControl>  
                    <br/>
                    <p style={{paddingLeft:'1rem'}}/>
                    <Label style={{ fontSize: '2rem'}}> Password</Label>
                    <span style= {{ padding: '0.5rem'}}></span>
                    <FormControl style={{ height: '2rem' , borderRadius: '1rem'
                                         }}
                                        type="password"
                                        name= "password"
                                        value= {data.password}
                                        placeholder= "enter password"
                                        required
                                        onChange={handleChange}
                                        >
                    </FormControl>
                    <br/>
                    <br/>
                    <Label style={{fontSize : '2rem' }}> Email</Label>
                    <span style={{padding:'2rem'}}></span>
                    <FormControl type="email" 
                        style={{ height: '2rem', borderRadius: '1rem'}}
                        name= "email"
                        required
                        value={data.email}
                        placeholder='enter email'
                        onChange={handleChange}
                        ></FormControl>
                    <br/>
                    <Label style={{fontSize : '2rem' }}> City</Label>
                    <span style={{padding:'2rem'}}></span>
                    <FormControl type="text" 
                        style={{ height: '2rem', borderRadius: '1rem'}}
                        name="city"
                        required
                        value={data.city}
                        placeholder='enter city name '
                        onChange={handleChange}
                        ></FormControl>
                    
            </FormGroup>
            <p>
                <div>   
                    <ul>
                        <li> Name : {data.name}</li>
                        <li> Password : {data.password}</li>
                        <li> Email : {data.email}</li>
                        <li> city : {data.city}</li>
                    </ul>

                </div>
            </p>
        </div>
    )

}

export default ContactusScreen