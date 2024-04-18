import React, { Component } from "react";
import Title from "./Title";
import Jersey from "./Jersey";
import { storeJerseys } from "../data";
import { JerseyConsumer } from "../Context";
export default class JerseyList extends Component {
  state = {
    jerseys: storeJerseys
  };
  render() {
   
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Jerseys" />
            <div className="row">
              <JerseyConsumer>
                {value=>{
                  return value.jerseys.map(jersey=>{
                    return <Jersey key={jersey.id} jersey={jersey}/>
                  })
                }}
              </JerseyConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}
