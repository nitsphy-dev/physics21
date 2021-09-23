import React, { useEffect, useState } from "react";

import "./css/Downloads.scss";

const Downloads = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db/downloads.json")
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="download">
      <div className="heading title">Downloads</div>
      <div className="download-list">
        {data &&
          data.files.map((f, i) => (
            <div className="download-card" key={i}>
              <embed src={f.path} type="application/pdf" />

              <p>{f.text}</p>

              <a href={f.path} target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Downloads;
