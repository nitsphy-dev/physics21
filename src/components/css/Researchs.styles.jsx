import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "1rem auto !important",
    border: "1px solid var(--theme1-100)",
    borderRadius: "10px !important",
  },
  accordionDetails: { padding: "0", margin: "0", "& a": { color: "#5dbfe6" } },
  mainTxt: {
    color: "var(--theme1-100)",
    fontWeight: "bold",
  },
}));

export default useStyles;
