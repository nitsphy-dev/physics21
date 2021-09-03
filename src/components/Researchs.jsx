import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon, Widgets } from "@material-ui/icons";

import useStyles from "./css/Researchs.styles";

const Researchs = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {data.name} (FIC: <span className={classes.mainTxt}>{data.fic}</span>)
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <Typography component="div">
          <ul>
            {data.details && data.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Accordion className={classes.root} style={{ width: "90%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Research Scholars' Details</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography component="div">
              <ul>
                {data.researchScholars &&
                  data.researchScholars.map((d, i) => (
                    <li key={i}>
                      <span className={classes.mainTxt}>{d.name}</span> <br />{" "}
                      <span>
                        {" "}
                        Email ID:{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={"mailto:" + d.email}
                        >
                          {d.email}
                        </a>
                      </span>
                    </li>
                  ))}
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
};

export default Researchs;
