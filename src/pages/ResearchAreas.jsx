import { Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Researchs from "../components/Researchs";

import "./css/ResearchAreas.scss";

const ResearchAreas = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db/researchAreas.json")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <main className="research-areas">
      <div className="heading title">Research Areas</div>
      <div className="msg">
        The Department of Physics at NIT Silchar conducts research in various
        discipline inluding both theoretical and experimental physics.
        Currently, the department includes 8 faculty members, 18 research
        scholars and 7 research laboratories equipped with sophisticated
        experimental and computational facilities.
      </div>
      <Divider style={{ width: "90%", margin: "auto" }} />
      <div className="heading">Experiments</div>
      {data && data.experiment.map((d) => <Researchs key={d.name} data={d} />)}
      <div className="heading">Theory</div>
      {data && data.theory.map((d) => <Researchs key={d.name} data={d} />)}
      <br />
      <Divider style={{ width: "90%", margin: "auto" }} />
    </main>
  );
};

export default ResearchAreas;
