import React, {Component} from 'react';
import './App.css'
import Clock from './Clock'
import {Form, FormControl, Button} from 'react-bootstrap'
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'January 07, 2018',
            newDeadLine:''
        }
    }

    changeDeadline(){

        this.setState({deadline: this.state.newDeadLine});
    }

    render(){
        return (
            <div className="App">
                <div className="title"> Countdown to {this.state.deadline}</div>
               <Clock 
                    deadline={this.state.deadline}/>                    
                <Form inline>
                   <input type="date" className="form-control"
                   onChange={event=>this.setState({newDeadLine: event.target.value})}/>                 
                   
                    <Button onClick={()=>this.changeDeadline()} className="btn btn-primary submitButton">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;