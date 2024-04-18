import React, { Component } from 'react'
const JerseyContext = React.createContext();
//provider
//consumer

 class JerseyProvider extends Component {
  render() {
    return (
      <JerseyContext.Provider value="hello">
        {this.props.children}       
      </JerseyContext.Provider>
        
     
    )
  }
}

const JerseyConsumer = JerseyContext.Consumer;  
export {JerseyProvider, JerseyConsumer};