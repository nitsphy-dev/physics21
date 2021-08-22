// React imports
import React, { useEffect, useState } from "react";

// Component imports
import ContactCard from "../components/ContactCard";

// Style imports
import "./css/DevTeam.scss";

const DevTeam = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db/devTeam.json")
      .then((response) => response.json())
      .then((res) => {
        setData(res.devTeam);
      });
  }, []);

  console.log(data);

  return (
    <main className="dev-team">
      <div className="heading title">Dev Team</div>
      <div className="dev-team-list">
        {data &&
          data.map((d) => (
            <ContactCard
              key={d.name}
              img={d.img}
              desg={d.desg}
              name={d.name}
              links={d.links}
            />
          ))}
      </div>
    </main>
  );
};

export default DevTeam;
