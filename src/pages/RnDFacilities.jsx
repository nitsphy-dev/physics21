import React, { useEffect } from "react";

import "./css/RnDFacilities.scss";

const RnDFacilities = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="rnd-facilities">
      <div className="heading title">R&amp;D Facilities</div>
    </main>
  );
};

export default RnDFacilities;
