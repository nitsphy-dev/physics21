// material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "15vw",
    margin: "1vw",
  },
  contactImg: {
    height: "200px",
    backgroundSize: "contain",
    marginTop: "2rem",
  },
  contactName: { textAlign: "center" },
  contactDetails: { justifyContent: "space-around" },
  contactIcon: { fontSize: "3rem" },
}));

export default useStyles;
