    import React, { Component } from 'react'
    import { storeJerseys,detailJersey } from './data';

    const JerseyContext = React.createContext();
    //provider
    //consumer

    class JerseyProvider extends Component {
        state = {
            jerseys: [],
            detailJersey: detailJersey,
            cart: storeJerseys,
            modalOpen: false,
            modalJersey: detailJersey,
            carSubtotal: 0,
            carTax: 0,
            carTotal: 0

        };

        getItem = (id) => {
            const jersey = this.state.jerseys.find(item => item.id === id);
            return jersey;
        }
        handleDetail = (id) => {
            const  jersey = this.getItem(id);
            this.setState(()=>{
                return {detailJersey: jersey}
            })
        }
        addToCart = (id) => {
           let tempJerseys = [...this.state.jerseys];
           const index = tempJerseys.indexOf(this.getItem(id));
            const jersey = tempJerseys[index];
            jersey.inCart = true;
            jersey.count = 1;
            const price = jersey.price;
            jersey.total = price;
            this.setState(()=>{
                return {jerseys: tempJerseys, cart: [...this.state.cart, jersey]}
            }, ()=>{
                console.log(this.state);
            })


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

         openModal = (id) => {
             const jersey = this.getItem(id);
             this.setState(()=>{
                 return {modalOpen: true, modalJersey: jersey}
             })
         }
         closeModal = () => {
             this.setState(()=>{
                 return {modalOpen: false}
             })
         }
         increment = (id) => {
            
         }
         decrement = (id) => {
             
         }
         removeItem = (id) => {
         } 
         clearCart = () => {
             
         }


    render() {
        return (
        <JerseyContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal : this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart
        }}>
            {this.props.children}       
        </JerseyContext.Provider>
            
        
        )
    }
    }

    const JerseyConsumer = JerseyContext.Consumer;  
    export {JerseyProvider, JerseyConsumer};