import React, {Component} from 'react';
import './App.css'
import Clock from './Clock'
import {Form, FormControl, Button} from 'react-bootstrap'
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'May 01, 2018',
            newDeadLine:''
        }
    }

    changeDeadline(){

        this.setState({deadline: this.state.newDeadLine});
    }

    render(){
        return (
            <div className="App">
                <img src="https://media.giphy.com/media/26xBIGFMLSK3OqnKg/giphy.gif"/>
                <div className="title"> Countdown to {this.state.deadline}</div>
               <Clock 
                    deadline={this.state.deadline}/>                    
                
            </div>
        )
    }
}

export default App;