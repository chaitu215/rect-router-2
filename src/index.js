import React , {Component} from "react"
import {render} from 'react-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import ContactUs from './ContactUs'
import Gallery from "./gallery"
/*
-> React router is used to navaigate between pages 
-> Router -> switch -> routes-> components 
-> each route will have its own components 
-> for each route one have to mention path and component name 
-> Switch will contain multiple Routes 
-> node module for react router is react-router-dom 
-> path in the route will have navlink behind 
-> BrowserRouter method will act as Router 
*/
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Router>
                <Header/>
                    <div className='wrapper'>
                        <Switch>
                            <Route path={'/'} exact component={Home}/>
                            <Route path={'/about'} component={About} />
                            <Route path= {'/ContactUs'} component= {ContactUs}/>
                            <Route path= {'/gallery'} component= {Gallery}/>
                        </Switch>
                    </div>
                <Footer/>
            </Router>
        )
    }
}
render(<App/> , document.getElementById('root'))
