import React, { Component } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
// import { JerseyConsumer } from "../Context";

export default class Jersey extends Component {
  render() {
    // const { id, title, img, price, inCart } = this.props.jersey;
    const {  img } = this.props.jersey;
    return (
      <jerseyWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={console.log("you clicked me")}>
            <Link to="/details">
              <img src={img} alt="jersey" className="card-img-top" />
            </Link>
          </div>
        </div>
      </jerseyWrapper>
    );
  }
}
// const jerseyWrapper = styled.div``;
