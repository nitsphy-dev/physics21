// React imports
import React, { useEffect } from "react";

// Material-ui imports
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

// Style imports
import "./css/DevTeam.scss";

const DevTeam = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="dev-team">
      <div className="heading title">Dev Team</div>
      <Card style={{ maxWidth: "345px", margin: "auto" }}>
        <CardActionArea>
          <CardMedia
            image="/img/alumni/Nandini.jpeg"
            title="Nandini"
            style={{ height: "200px" }}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom component="h2">
              Nandini
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
};

export default DevTeam;
