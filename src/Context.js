    import React, { Component } from 'react'
    import { storeJerseys,detailJersey } from './data';

    const JerseyContext = React.createContext();
    //provider
    //consumer

    class JerseyProvider extends Component {
        state = {
            jerseys: storeJerseys,
            detailJersey: detailJersey
        };
        handleDetail = (id) => {
            console.log("Hlo from details");
        }
        addToCart = () => {
            console.log("Hlo from  add to cart");
        }
    render() {
        return (
        <JerseyContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart
        }}>
            {this.props.children}       
        </JerseyContext.Provider>
            
        
        )
    }
    }

    const JerseyConsumer = JerseyContext.Consumer;  
    export {JerseyProvider, JerseyConsumer};