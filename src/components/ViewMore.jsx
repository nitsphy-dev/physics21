// React imports
import React from "react";

// Material-ui imports
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  DialogContentText,
  Avatar,
  Divider,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

// JSS imports
import useStyles from "./css/ViewMore.styles";

const ViewMore = (props) => {
  const { name, email, img, phone, desg, details } = props.data;
  const { open, whenClose } = props;
  const classes = useStyles();

  const handleClose = () => {
    whenClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="lg"
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle className={classes.dialogTitle} disableTypography>
        <Typography variant="h5">{name}</Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon className={classes.closeIcon} />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText component="div">
          <div className={classes.dialogContent}>
            <div className={classes.dialogContentMain}>
              <Avatar
                component={"span"}
                variant="square"
                alt={name}
                src={img}
                className={classes.profileImg}
              />
              <div className={classes.dialogContentHeader}>
                Department: PHYSICS
                <br />
                {desg}
                <br />
                Phone: {phone}
                <br />
                Email:{" "}
                <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>Alternate email:</div>
              <div className={classes.dialogContentValue}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`mailto:${details.altEmail}`}
                >
                  {details.altEmail}
                </a>
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>Date of Joining:</div>
              <div className={classes.dialogContentValue}>
                {details.dateOfJoining}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                URL of Web Profile:
              </div>
              <div className={classes.dialogContentValue}>
                <a target="_blank" rel="noreferrer" href={details.profileURL}>
                  Click here to visit
                </a>
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentHeading}>
              Academic Qualification
            </div>
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Qualification Details:
              </div>
              <div className={classes.dialogContentValue}>
                {details.academicQualifications.qualificationDetails}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Currently Teaching Subject:
              </div>
              <div className={classes.dialogContentValue}>
                {details.academicQualifications.currentlyTeachingSubject}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentHeading}>Experience</div>
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Experience Duration:
              </div>
              <div className={classes.dialogContentValue}>
                {details.experience.experienceDuration}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Experience Description:
              </div>
              <div className={classes.dialogContentValue}>
                {details.experience.experienceDesc}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Area of Interest/ Specialization:
              </div>
              <div className={classes.dialogContentValue}>
                {details.experience.specialization}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>Teaching Interest:</div>
              <div className={classes.dialogContentValue}>
                {details.experience.teachingInterest}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>Research Interest:</div>
              <div className={classes.dialogContentValue}>
                {details.experience.researchInterest}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Administrative Interest:
              </div>
              <div className={classes.dialogContentValue}>
                {details.experience.administrativeInterest}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Biographical Sketch:
              </div>
              <div className={classes.dialogContentValue}>
                {details.experience.biographicalSketch}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                Ph. D. Scholars Guided:
              </div>
              <div className={classes.dialogContentValue}>
                {details.experience.phdScholarsGuided}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                PG Scholars Guided:
              </div>
              <div className={classes.dialogContentValue}>
                {details.experience.pgScholarsGuided}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>Achievements:</div>
              <div className={classes.dialogContentValue}>
                {details.experience.achievements}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>Projects:</div>
              <div className={classes.dialogContentValue}>
                {details.experience.projects}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>Books Published:</div>
              <div className={classes.dialogContentValue}>
                {details.experience.booksPublished}
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentHeading}>Publications</div>
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                International Journals:
              </div>
              <div className={classes.dialogContentValue}>
                <ol>
                  {details.publications.internationalJournals.map((j, ind) => (
                    <li key={ind}>{j}</li>
                  ))}
                </ol>
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>National Journals:</div>
              <div className={classes.dialogContentValue}>
                <ol>
                  {details.publications.nationalJournals.map((j, ind) => (
                    <li key={ind}>{j}</li>
                  ))}
                </ol>
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                International Conferences:
              </div>
              <div className={classes.dialogContentValue}>
                <ol>
                  {details.publications.internationalConf.map((j, ind) => (
                    <li key={ind}>{j}</li>
                  ))}
                </ol>
              </div>
            </div>
            <Divider />
            <div className={classes.dialogContentDetail}>
              <div className={classes.dialogContentKey}>
                National Conferences:
              </div>
              <div className={classes.dialogContentValue}>
                <ol>
                  {details.publications.nationalConf.map((j, ind) => (
                    <li key={ind}>{j}</li>
                  ))}
                </ol>
              </div>
            </div>
            <Divider />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMore;
