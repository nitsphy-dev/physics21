import React, { useEffect } from "react";

import "./css/Downloads.scss";

const Downloads = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="download">
      <div className="heading title">Downloads</div>
    </main>
  );
};

export default Downloads;
