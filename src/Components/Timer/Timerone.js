import React, { Component } from 'react'

export class Timer extends Component {
    constructor(){
        super();
        this.state={
          count:0,
          timer:0
        }
        console.log("Timerone Constructor");
    }

    static getDerivedStateFromProps(){
      console.log("Timerone getDerivedStateFromProps");
      return null;  //this is to make sure that we are not overriding a state update
    }

    shouldComponentUpdate(nextProps,nextState){
      return true
    }

     handleCount = ()=>{
        this.setState((prevState)=>{
          return {count:prevState.count + 1}
        })
    }

  render() {
    
    return (
      <>
       {/* <h1>Counter</h1>
      {this.state.count}
      <button onClick={this.handleCount}>Increase</button> */}
     

      <h1>Timer:
      {
      new Date(this.state.timer * 1000).toISOString().slice(11,19)}
      </h1>
      </>
     
    )
  }

  componentDidMount(){
    console.log("Timerone componentDidMount");
    this.timer = setInterval(()=>{
      this.setState((prevState)=>({
        timer:prevState.timer+0.5,
      }))
    },1000)

  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Timerone getSnapshotBeforeUpdate");
    return null
    
}

componentDidUpdate(){
  console.log("Timerone componentDidUpdate");
  if(this.state.timer === 10){
    clearInterval(this.timer);
  }

}

componentWillUnmount(){
  console.log("Timerone componentWillUnmount");
}

}

export default Timer