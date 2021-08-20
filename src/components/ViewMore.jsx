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
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

// JSS imports
import useStyles from "./css/ViewMore.styles";

const ViewMore = (props) => {
  const { name, email, img, phone, desg, open, whenClose } = props;
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
      <DialogTitle
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        disableTypography
      >
        <Typography variant="h5">{name}</Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ display: "flex" }}>
          <Avatar
            component={"span"}
            variant="square"
            alt={name}
            src={img}
            style={{ width: "20vh", height: "20vh", margin: "0 2vh" }}
          />
          Department: PHYSICS
          <br />
          {desg}
          <br />
          Phone: {phone}
          <br />
          Email: {email}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMore;
