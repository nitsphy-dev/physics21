import React, { useEffect } from "react";

import "./css/Projects.scss";

const Projects = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="projects">
      <div className="heading title">Sponsored Projects</div>
    </main>
  );
};

export default Projects;
