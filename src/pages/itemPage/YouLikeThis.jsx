import React from "react";
import SmallCard from "../../components/CardProduct/SmallCard/SmallCard";
import { connect } from "react-redux";

const YouLikeThis = ({ devices }) => {
  return (
    <div className="wrapYouLikeThis">
      <h3>Вам можуть сподобатись</h3>
      <div className="wrapCardYouLikeThis">
        {devices.map((item) => (
          <SmallCard key={item.id} device={item} />
        ))}
      </div>
    </div>
  );
};

export default connect((state) => ({
  devices: !state.items.devices
    ? []
    : state.items.devices.slice(0, 4),
}))(YouLikeThis);
