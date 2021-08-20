// React imports
import React, { useEffect, useState } from "react";

// CSS Imports
import "./css/Faculty.scss";

// Component import
import People from "../components/People";

const Hod = (props) => {
  // Document title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db/faculty.json")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <main className="faculty">
      <div className="heading title">Faculties</div>
      {data &&
        data.faculty.map((faculty) => (
          <React.Fragment key={faculty.name}>
            <People
              name={faculty.name}
              desg={faculty.desg}
              phone={faculty.phone}
              email={faculty.email}
              img={faculty.img}
            />
            <br />
          </React.Fragment>
        ))}
    </main>
  );
};

export default Hod;
