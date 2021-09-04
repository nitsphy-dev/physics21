// material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    margin: "1rem auto",
  },
  projectData: {
    display: "flex",
    justifyContent: "space-between",
  },
  projectDetails: {
    display: "flex",
    padding: "1rem 0",
  },
  icon: {
    fontSize: "1.4rem",
    marginRight: "0.4rem",
  },
  mainTxt: {
    color: "var(--theme1-100) !important",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  "@media screen and (max-width: 800px)": {
    root: {
      width: "80%",
    },
  },
}));

export default useStyles;
