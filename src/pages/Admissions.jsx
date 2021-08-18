// React imports
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// CSS import
import "./css/Admissions.scss";

// React component
const Admissions = (props) => {
  // Page Title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [data, setData] = useState(null);

  // Fetch Data
  useEffect(()=>{
    fetch('/db/admissions.json')
			.then(response => response.json())
			.then(res => {
				setData(res);
			});
  },[])

  return (
    <main className="admissions">
      <div className="heading title">Admissions</div>
      <div className="heading sub-title">M. Sc. Admissions</div>
      <div className="msg">
      The department of Physics offers 2 years course for M. Sc. in Applied Physics. 
      Admissions to this course can only occur by securing a rank in IIT JAM and the 
      CCMN counseling process. Every year CCMN is organized by a different NIT. The 
      CCMN conducts 3 rounds of counseling usually followed by National Spot Round 
      for the remaining seats. Based upon the preferences and the cutoff set by every 
      NIT, the seats are allotted to every student.
      </div>
      <div className="important-msg">
        {data && 
          <>
            {data.msc.ccmn.organiser} <a target="_blank" href={data.msc.ccmn.link}>{data.msc.ccmn.linkMsg}</a>
          </>
        }
      </div>

      <div className="heading contact-heading">
        Departmental Coordinator
      </div>

      <div className="contact">
        {data && data.msc.coordinator.map(c => (
          <React.Fragment key={c.name}>
            <div className="contact-details">
              <div className="name">
                {c.name}
              </div>
              <div className="details">
                Phone: {c.phone}
                <br/>
                Email: <a href={`mailto:${c.email}`}>{c.email}</a>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="heading sub-title">Ph. D. Admissions</div>
      <div className="msg">
        The department of Physics offers Ph. D. programme. A candidate fulfilling 
        minimum academic qualifications can apply for the same with valid
        <ul>
          <li>GATE score.</li>
          <li>CSIR or UGC NET - JRF.</li>
          <li>INSPIRE fellowship.</li>
        </ul>
        The admission is offered twice in a year, during July - August and December - January sessions.
      </div>
      <div className="important-msg">
      The details of the Ph. D. advertisement can be found <a target="_blank" href="http://www.nits.ac.in/admissions/phdadmission.php">here</a>
      </div>
    </main>
  );
};

export default Admissions;
