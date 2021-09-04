// React import
import React, { useEffect } from "react";

// Material UI import
import {
  Card,
  Divider,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

// Style import
import "./css/ReachUs.scss";

const ReachUs = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="reach-us">
      <div className="heading title">Reach Us</div>
      <Card style={{ maxWidth: "90%", margin: "auto" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1184565593962!2d92.79001951540995!3d24.757127355487476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49c23195a36f%3A0x5d11660a2c95bd4c!2sDepartment%20of%20Physics!5e0!3m2!1sen!2sin!4v1629641111683!5m2!1sen!2sin"
          title="Google Map"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Card>
      <div className="feedback">
        <div className="feedbackMsg">
          <div className="heading">Leave us a feedback</div>
          <Card className="feedbackCard">
            <CardActionArea>
              <CardMedia
                image="/img/feedback.png"
                title="Feedback"
                className="feedbackImg"
              />
            </CardActionArea>
            <a href="#google-form">
              <button className="feedbackBtn">FEEDBACK</button>
            </a>
          </Card>
        </div>
        <div className="feedbackForm">
          <Divider orientation="vertical" className="feedbackMobView" />
          <div className="feedbackDetails">
            <Typography variant="h4">Head of the department</Typography>
            <Divider />
            <br />
            <Typography variant="body1">
              Dr. Subhasis Panda,
              <br />
              Head of the Department,
              <br />
              Department of Physics,
              <br />
              National Institute of Technology Silchar,
              <br />
              Silchar - 788010, Assam.
              <br />
              Phone: 8399920286
              <br />
              Email:{" "}
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hod@phy.nits.ac.in&tf=1">
                hod@phy.nits.ac.in
              </a>
            </Typography>
          </div>
        </div>
      </div>
      <div className="heading">Mode of Communication</div>
      <div className="moc">
        <Card className="moc-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Airplane"
              image="/img/airplane.jpeg"
              title="Airplane"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Airplane
              </Typography>
              <Typography variant="body2" color="textSecondary" component="ul">
                <li>
                  There are daily direct flights to Silchar from cities like
                  Kolkata, Guwahati and Imphal.
                </li>
                <li>
                  Air India and Jet Airways operate flights from Kolkata to
                  Silchar/Guwahati.
                </li>
                <li>
                  From airport, the Institute campus is approximately 30 Kms.
                </li>
                <li>
                  Hired private taxi service is available to NIT campus at a
                  reasonable cost.
                </li>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="moc-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Railway"
              image="/img/train.jpeg"
              title="Train"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Railway
              </Typography>
              <Typography variant="body2" color="textSecondary" component="ul">
                <li>Silchar is well connected with India through railways.</li>
                <li>
                  Silchar is directly connected to Lumding/Guwahati & Agartala.
                </li>
                <li>
                  Time taken by train between Guwahati and Silchar is
                  approximately 6 hours.
                </li>
                <li>
                  NIT Silchar is not far from railway station and public
                  transport medium is a convenient way to reach.
                </li>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="moc-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Roadway"
              image="/img/road.jpeg"
              title="Roadway"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Roadway
              </Typography>
              <Typography variant="body2" color="textSecondary" component="ul">
                <li>
                  Silchar is well connected with various cities through road.
                </li>
                <li>
                  A 340 km long National Highway directly connects Silchar with
                  Guwahati.
                </li>
                <li>
                  A large number of day/night buses ply between Guwahati and
                  Silchar in the morning and evening everyday.
                </li>
                <li>
                  Bus will drop the passengers at ISBT, Silchar. Please pick up
                  an auto-rickshaw for NIT Campus.
                </li>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </main>
  );
};

export default ReachUs;
