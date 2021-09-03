import React, { useEffect } from "react";

import "./css/Publications.scss";

const Publications = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="publications">
      <div className="heading title">Publications</div>
    </main>
  );
};

export default Publications;
