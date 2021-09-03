import React, { useEffect } from "react";

import "./css/PhdThesis.scss";

const PhdThesis = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="phd-thesis">
      <div className="heading title">Ph. D. Thesis</div>
    </main>
  );
};

export default PhdThesis;
