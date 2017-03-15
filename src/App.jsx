import React, {Component} from 'react';
import './App.css'
import Clock from './Clock'
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
                <div>
                    <input placeholder="Enter date"
                    onChange={event=>this.setState({newDeadLine: event.target.value})}/>
                    <button onClick={()=>this.changeDeadline()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;