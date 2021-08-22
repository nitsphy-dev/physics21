// React imports
import React from "react";

// Material-ui imports
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

// Style import
import useStyles from "./css/ContactCard.styles";

const ContactCard = (props) => {
  const { name, links, img, desg } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia image={img} title={name} className={classes.contactImg} />
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            component="h2"
            className={classes.contactName}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.contactDetails}
            color="textSecondary"
          >
            {desg}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contactLinks}>
        <a rel="noreferrer" target="_blank" href={links.github}>
          <GitHub style={{ fontSize: "2.5rem" }}></GitHub>
        </a>
        <a rel="noreferrer" target="_blank" href={links.linkedin}>
          <LinkedIn className={classes.contactIcon}></LinkedIn>
        </a>
        <a rel="noreferrer" target="_blank" href={links.email}>
          <Email className={classes.contactIcon}></Email>
        </a>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
