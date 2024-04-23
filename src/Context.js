import React, { Component } from "react";
import { storeJerseys, detailJersey } from "./data";

const JerseyContext = React.createContext();
//provider
//consumer

class JerseyProvider extends Component {
  state = {
    jerseys: [],
    detailJersey: detailJersey,
    cart: [],
    modalOpen: false,
    modalJersey: detailJersey,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  getItem = (id) => {
    const jersey = this.state.jerseys.find((item) => item.id === id);
    return jersey;
  };
  handleDetail = (id) => {
    const jersey = this.getItem(id);
    this.setState(() => {
      return { detailJersey: jersey };
    });
  };
  addToCart = (id) => {
    let tempJerseys = [...this.state.jerseys];
    const index = tempJerseys.indexOf(this.getItem(id));
    const jersey = tempJerseys[index];
    jersey.inCart = true;
    jersey.count = 1;
    const price = jersey.price;
    jersey.total = price;
    this.setState(
      () => {
        return { jerseys: tempJerseys, cart: [...this.state.cart, jersey] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  componentDidMount() {
    this.setJerseys();
  }

  setJerseys = () => {
    let tempJerseys = [];
    storeJerseys.forEach((item) => {
      const singleItem = { ...item };
      tempJerseys = [...tempJerseys, singleItem];
    });
    this.setState(() => {
      return { jerseys: tempJerseys };
    });
  };

  openModal = (id) => {
    const jersey = this.getItem(id);
    this.setState(() => {
      return { modalOpen: true, modalJersey: jersey };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedJersey = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedJersey);
    const jersey = tempCart[index];
    jersey.count = jersey.count + 1;
    jersey.total = jersey.count * jersey.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedJersey = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedJersey);
    const jersey = tempCart[index];
    jersey.count = jersey.count - 1;
    if (jersey.count <= 0) {
      this.removeItem(id);
    } else {
      jersey.total = jersey.count * jersey.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempJerseys = [...this.state.jerseys];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempJerseys.indexOf(this.getItem(id));
    let removeJersey = tempJerseys[index];
    removeJersey.inCart = false;
    removeJersey.count = 0;
    removeJersey.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          jerseys: [...tempJerseys],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setJerseys();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <JerseyContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </JerseyContext.Provider>
    );
  }
}

const JerseyConsumer = JerseyContext.Consumer;
export { JerseyProvider, JerseyConsumer };
