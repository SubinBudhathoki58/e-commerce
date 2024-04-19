import React, { Component } from "react";
import { JerseyConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <JerseyConsumer>
        {(value) => {
          if (!value.detailJersey) {
            return <div>Loading...</div>; // Handle loading state
          }
          const { id, Club, img, info, price, title, inCart } = value.detailJersey;
          return (
            <section className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Jersey Name: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Name of Club: <span className="text-uppercase">{Club}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some info about Jersey:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer >Back to Jerseys</ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                    disabled={inCart? true : false}
                      onClick={() => {
                        value.addToCart(id)
                      }}

                    >
                      {inCart ? "In Cart" : "Add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </JerseyConsumer>
    );
  }
}
