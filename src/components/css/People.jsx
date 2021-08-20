// material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "auto",
  },
  heading: {
    fontSize: "2.5vh",
    fontWeight: theme.typography.fontWeightRegular,
  },
  facultyDetails: {
    display: "flex",
    alignItems: "center",
    fontSize: "3vh",
    "& p": {
      fontSize: "2vh",
      "& b": {
        fontSize: "2.2vh",
        textTransform: "uppercase",
      },
    },
  },
  facultyImg: {
    margin: "0 3vh",
    width: "15vh",
    height: "15vh",
  },
}));

export default useStyles;