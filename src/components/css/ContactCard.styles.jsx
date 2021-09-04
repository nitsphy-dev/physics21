// material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "25vh",
    margin: "1vw",
  },
  contactImg: {
    height: "200px",
    backgroundSize: "contain",
    marginTop: "2rem",
  },
  contactName: { textAlign: "center" },
  contactDetails: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "small",
  },
  contactLinks: { justifyContent: "space-around" },
  contactIcon: { fontSize: "3rem" },
  "@media screen and (max-width: 500px)": {
    root: {
      width: "45%",
    },
  },
}));

export default useStyles;
