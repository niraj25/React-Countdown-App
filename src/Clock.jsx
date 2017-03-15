import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state ={
            hours: 0,
            days: 0,
            minutes: 0,
            seconds:0
        };
        console.log(props);

    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.props.deadline),1000);

    }

    leadingZero(num){
        if(num < 10)
        {
            return "0"+ num;
        }
        else{
            return num;
        }
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        
        const seconds = Math.floor((time/1000) % 60);
        const hours = Math.floor((time/(1000*60*60) % 24));
        const minutes = Math.floor((time/1000/60) % 60);
        const days = Math.floor(time/(1000*60*60*24));
        
        this.setState({days, hours,minutes,seconds});

    }
    render(){
        
        return(
            <div>
                <div>
                    <div className="days">{this.leadingZero(this.state.days)} days</div>                   
                    <div className="hours">{this.leadingZero(this.state.hours)} hours</div>
                    <div className="minutes">{this.leadingZero(this.state.minutes)} minutes</div>
                    <div className="seconds">{this.leadingZero(this.state.seconds)} seconds</div>
                </div>
            </div>

        );
    }
}
export default Clock;