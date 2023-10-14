import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
    constructor(){
        super()
        this.state={
            name:"ComponentA",
            data:[]
        }
        console.log("ComponentA Constructor");
    }

    static getDerivedStateFromProps(){
               console.log("ComponentA getDerivedStateFromProps")
               return null;
    }
    
    componentDidMount(){
        console.log("ComponentA componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => this.setState({data}))
    }

  render() {
    
      console.log("ComponentA renders");
        return(<>   
        <ul>

        {this.state.data.map((d)=>{
            return (
               
                    <li>{d.email}</li>
               
            )
        })}
        </ul>
       
        </>)
    
  }
}

export default ComponentA;