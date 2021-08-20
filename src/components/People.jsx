// React imports
import React, { useState } from "react";

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
import useStyles from "./css/People.styles";

// Component imports
import ViewMore from "./ViewMore";

const People = (props) => {
  const { name, desg, phone, email, img } = props;
  const classes = useStyles();

  // For dialog box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Button variant="contained" onClick={handleClickOpen}>
              View More
            </Button>

            {/* Dialog box */}
            <ViewMore
              name={name}
              email={email}
              phone={phone}
              img={img}
              desg={desg}
              whenClose={handleClose}
              open={open}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default People;
