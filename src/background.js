import React from "react";

const backGround = Array.from(new Array(16));

class BackGround extends React.Component {
  render() {
    return [
      backGround.map((item, index) => {
        return <div className="map-cell" key={index} />;
      })
    ];
  }
}

export default BackGround;
