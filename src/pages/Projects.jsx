import React, { useEffect, useState } from "react";

import "./css/Projects.scss";

import ProjectsCard from "../components/ProjectsCard";

const Projects = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db/projects.json")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <main className="projects">
      <div className="heading title">Sponsored Projects</div>
      <div className="heading">Completed Projects</div>
      <div className="projects">
        {data &&
          data.completed.map((d, i) => <ProjectsCard key={i} data={d} />)}
      </div>
      <div className="heading">Ongoing Projects</div>
      <div className="projects">
        {data && data.ongoing.map((d, i) => <ProjectsCard key={i} data={d} />)}
      </div>
    </main>
  );
};

export default Projects;
