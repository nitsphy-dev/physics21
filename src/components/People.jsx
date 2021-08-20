// React imports
import React from "react";

// Material UI Imports
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

// JSS Imports
import useStyles from "./css/People";

const People = (props) => {
  const { name, desg, phone, email, img } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.facultyDetails}>
          <Avatar
            alt="Professor Asim Roy"
            src={img}
            className={classes.facultyImg}
          />
          <div>
            <Typography>
              <b>{desg}</b> <br />
              Department: PHYSICS <br />
              Phone: {phone} <br />
              Email:
              <a href={`mailto:${email}`}> {email}</a>
            </Typography>
            <Button variant="contained" color="primary">
              View More
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default People;
