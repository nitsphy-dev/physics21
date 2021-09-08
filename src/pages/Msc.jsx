/* eslint-disable no-unused-vars */
//* React
import { useState, useEffect } from "react";

//* Dependencies
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

//* CSS
import "./css/Msc.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  tableCont: {
    width: "90%",
    boxSizing: "border-box",
    margin: "0 auto",
  },

  panel: {
    width: "100%",
    margin: "0 auto",
  },

  bar: {
    width: "100%",
    margin: "0 auto",
    backgroundColor: "var(--theme2-100)",
    color: "var(--theme3-100)",
  },

  tableHead: {
    backgroundColor: "var(--theme4-100)",
    color: "var(--theme1-100)",
    fontWeight: "bold",
  },
}));

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Msc = (props) => {
  //! Page Title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className="msc">
      <div className="heading title">M. Sc.</div>
      <p className="msg">
        The department offers two year Master of Science in Applied Physics,
        which consists of four semesters and a total credit of 70. It includes
        taught courses in all semester and final semester projects.
      </p>

      <div className="heading">Course Structure</div>

      <TableContainer component={Paper} className={classes.tableCont}>
        <Table aria-label="simple table" size="medium">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.tableHead}>
                Semester
              </TableCell>
              <TableCell align="center" className={classes.tableHead}>
                Credit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">I</TableCell>
              <TableCell align="center">16</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">II</TableCell>
              <TableCell align="center">18</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">III</TableCell>
              <TableCell align="center">17</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">IV</TableCell>
              <TableCell align="center">19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">70</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <br />
      <AppBar position="static" className={classes.bar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
          className={classes.tabs}
        >
          <Tab label="Semester I" {...a11yProps(0)} />
          <Tab label="Semester II" {...a11yProps(1)} />
          <Tab label="Semester III" {...a11yProps(2)} />
          <Tab label="Semester IV" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.panel}>
        <div className="tab-heading">Semester-I</div>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tableHead}>
                  Course Name
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  L
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  T
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  P
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  Credit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Mathematical Physics - I</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Classical Mechanics</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Quantum Mechanics - I</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Electrodynamics - I</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Physics Lab - I</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">6</TableCell>
                <TableCell align="center">4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Sub-Total</TableCell>
                <TableCell align="center" colSpan={3}>
                  16
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.panel}>
        <div className="tab-heading">Semester-II</div>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tableHead}>
                  Course Name
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  L
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  T
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  P
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  Credit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  Condensed Matter Physics - I
                </TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Statistical Mechanics</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Quantum Mechanics - II</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Mathematical Physics - II</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Physics Lab - II</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">6</TableCell>
                <TableCell align="center">4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Computational Physics Lab</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Sub-Total</TableCell>
                <TableCell align="center" colSpan={3}>
                  18
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.panel}>
        <div className="tab-heading">Semester-III</div>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tableHead}>
                  Course Name
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  L
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  T
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  P
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  Credit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  Condensed Matter Physics - II
                </TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Electrodynamics - II</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Electronics</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  Atomics and Molecular Physics
                </TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Physics Lab - III</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">6</TableCell>
                <TableCell align="center">4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Seminar</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Sub-Total</TableCell>
                <TableCell align="center" colSpan={3}>
                  17
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.panel}>
        <div className="tab-heading">Semester-IV</div>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tableHead}>
                  Course Name
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  L
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  T
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  P
                </TableCell>
                <TableCell align="center" className={classes.tableHead}>
                  Credit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Physics of Semiconductor</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Experimental Techniques</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  Nuclear and Particle Physics
                </TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Project</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Sub-Total</TableCell>
                <TableCell align="center" colSpan={3}>
                  19
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <div className="download">
        * New regulation w.e.f. 2019
        <br />
        <br />
        Click{" "}
        <a
          href="https://drive.google.com/file/d/187GmRa8Wni1Vit1I_amDl3s7nqBqnFZI/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="bold"
        >
          here
        </a>{" "}
        to download the detailed course structure and syllabus.
        <br />
        <br />
        Click{" "}
        <a
          href="http://www.nits.ac.in/academics/info/Regulations/MSc_Regulation2019.pdf"
          target="_blank"
          rel="noreferrer"
          className="bold"
        >
          here
        </a>{" "}
        to download the latest rules and regulations.
      </div>
    </main>
  );
};

export default Msc;
