import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";
import {
  Business as BusinessIcon,
  Person as PersonIcon,
  QueryBuilder as QueryBuilderIcon,
} from "@material-ui/icons";

import useStyles from "./css/ProjectsCard.styles";

const ProjectsCard = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {data.name}
        </Typography>
        <div className={classes.projectData}>
          <div className={classes.projectDetails}>
            <BusinessIcon className={classes.icon} />
            <Typography> {data.org}</Typography>
          </div>
          <div className={classes.projectDetails}>
            <QueryBuilderIcon className={classes.icon} />
            <Typography> {data.time}</Typography>
          </div>
        </div>
        <div className={classes.projectDetails}>
          <PersonIcon className={classes.icon} />
          <Typography className={classes.mainTxt}>{data.fic}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
