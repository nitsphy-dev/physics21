// React imports
import React, { useEffect } from "react";

// Style Imports
import "./css/PhdScholars.scss";

const PhdScholars = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="phd-scholars">
      <div className="heading title">Ph. D. Scholars</div>
    </main>
  );
};

export default PhdScholars;
