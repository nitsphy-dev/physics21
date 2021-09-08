// React imports
import React, { useEffect } from "react";

// Styles imports
import "./css/MscScholars.scss";

const MscScholars = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="msc-scholars">
      <div className="heading title">M. Sc. Students</div>
    </main>
  );
};

export default MscScholars;
