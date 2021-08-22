// React imports
import React, { useEffect } from "react";

// Styles import
import "./css/NonTeachingStaff.scss";

const NonTeachingStaff = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="non-teaching-staff">
      <div className="heading title">Non-Teaching Staff</div>
    </main>
  );
};

export default NonTeachingStaff;
