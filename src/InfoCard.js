import React from "react";

export default function InfoCard(props){
    return(
      <div className="InfoCard">
        <h3>
          <strong>{props.value}
          <span className="unit">{props.unit}</span></strong>
        </h3>
        <p>{props.name}</p>
      </div>
    );
}