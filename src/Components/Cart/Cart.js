import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { JerseyConsumer } from "../../Context";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <JerseyConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="Cart" />
                  <CartColumns />
                </React.Fragment>
              );
            }else{

             return <EmptyCart />;
            }
          }}
        </JerseyConsumer>
      </section>
    );
  }
}
