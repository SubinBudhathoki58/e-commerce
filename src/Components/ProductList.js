import React, { Component } from 'react'
import Title from './Title';
// import Product from './Product'
export default class ProductList extends Component {
  state = {
    Products: [],
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Jerseys" />
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
        
        // <Product/>
    )
  }
}
