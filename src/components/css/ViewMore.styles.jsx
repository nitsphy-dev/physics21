import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "auto",
  },
  closeIcon: {
    color: "var(--theme1-100)",
  },
  profileImg: { width: "15vh", height: "15vh", margin: "0 2vh" },
  dialogTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dialogContent: {
    "& a": {
      color: "#5dbfe6",
    },
  },
  dialogContentMain: {
    margin: "1.5rem auto",
    display: "flex",
    alignItems: "center",
  },
  dialogContentHeader: {
    color: "#4a4a4a",
    fontSize: "2vh",
    lineHeight: "3.2vh",
  },
  dialogContentDetail: {
    display: "flex",
    margin: "0.8rem auto",
    color: "#4b4b4b",
  },
  dialogContentKey: {
    color: "#1a1a1a",
    width: "40%",
  },
  dialogContentValue: {
    width: "60%",
  },
  dialogContentHeading: {
    fontWeight: "bold",
    color: "#1f1f1f",
    margin: "0.8rem auto",
    fontSize: "2vh",
  },
  "@media screen and (max-width: 500px)": {
    dialogContentMain: {
      flexDirection: "column",
    },
    dialogContentHeader: {
      marginTop: "1rem",
    },
  },
}));

export default useStyles;
