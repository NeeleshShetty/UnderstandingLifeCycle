
import React from "react";
import ComponentA from "./Components/Component/ComponentA";
import Timerone from "./Components/Timer/Timerone";


class App extends React.Component {
  constructor(){
    super();

    this.state={
      mount: false
    }
}
handleMount = ()=>{
  this.setState((prevState)=>({mount:!prevState.mount}))
}
    
  render(){
    return (
      <>
      {/* // <ComponentA /> */}
     <h1> <button onClick={this.handleMount}>{this.state.mount ? "Unmount" : "Mount"}</button></h1>
      {this.state.mount ? <Timerone /> : null }
      </>
      
      );
  }
 
}

export default App;
