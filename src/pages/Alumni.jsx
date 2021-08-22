// React imports
import React from "react";
import { useEffect } from "react";

// Styles imports
import "./css/Alumni.scss";

const Alumni = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="alumni">
      <div className="heading title">Alumni</div>
    </main>
  );
};

export default Alumni;
