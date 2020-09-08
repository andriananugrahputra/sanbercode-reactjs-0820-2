import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super()

        this.state = {
            countDown: 10,
            currentTime : new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
            show: true
        }
    }

    componentDidUpdate() {
        if(this.state.show) {
            if(this.state.countDown <= 0) {
                this.setState({
                    show: false
                })
            }
        }
    }

    componentDidMount(){
        if (this.props.start !== undefined){
            this.setState({countDown: this.props.start})
        }
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            countDown: this.state.countDown - 1 ,
            currentTime: new Date().toLocaleTimeString()
        });
    }

    render(){
        return(
            <div>
                {this.state.show && (
                    <h1>sekarang jam : {this.state.currentTime} hitung mundur : {this.state.countDown}</h1>
                )}
            </div>
        )
    }
}

export default Timer