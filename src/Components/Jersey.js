import React, { Component } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
// import { JerseyConsumer } from "../Context";

export default class Jersey extends Component {
  render() {
    // const { id, title, img, price, inCart } = this.props.jersey;
    const { img, inCart } = this.props.jersey;
    return (
      <jerseyWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={console.log("you clicked me")}
          >
            <Link to="/details">
              <img src={img} alt="jersey" className="card-img-top" />
            </Link>
            <button
              className="card-btn"
              disabled={inCart ? true : false}
              onClick={() => console.log("added to cart")}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {""}
                  inCart
                </p>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="24" // Adjust width and height as needed
                  height="24"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </jerseyWrapper>
    );
  }
}
// const jerseyWrapper = styled.div``;
