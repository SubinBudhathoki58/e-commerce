    import React, { Component } from 'react'
    import { storeJerseys,detailJersey } from './data';

    const JerseyContext = React.createContext();
    //provider
    //consumer

    class JerseyProvider extends Component {
        state = {
            jerseys: [],
            detailJersey: detailJersey
        };
        handleDetail = (id) => {
            console.log("Hlo from details");
        }
        addToCart = (id) => {
            console.log(`Hlo from  add to cart.id is $(id)`);
        };
        componentDidMount() {
            this.setJerseys();
        }

         setJerseys = () => {
             let tempJerseys = [];
             storeJerseys.forEach(item => {
                 const singleItem = {...item};
                 tempJerseys = [...tempJerseys, singleItem];

             })
             this.setState(()=>{
                 return {jerseys: tempJerseys}
             })
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