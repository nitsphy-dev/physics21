/* eslint-disable no-unused-vars */
//* React
import { useState, useEffect } from 'react';

//* Dependencies
import PropTypes from 'prop-types';
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
} from '@material-ui/core';

//* CSS
import './css/Msc.scss';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Msc = props => {
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
		<main className='msc'>
			<div className='heading'>M. Sc.</div>
			<p>Course Structure</p>

			<TableContainer component={Paper}>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>Semester</TableCell>
							<TableCell align='center'>Credit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell align='center'>I</TableCell>
							<TableCell align='center'>16</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>II</TableCell>
							<TableCell align='center'>18</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>III</TableCell>
							<TableCell align='center'>17</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>IV</TableCell>
							<TableCell align='center'>19</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Total</TableCell>
							<TableCell align='center'>70</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<br />
			<br />
			<br />
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'>
					<Tab label='Semester I' {...a11yProps(0)} />
					<Tab label='Semester II' {...a11yProps(1)} />
					<Tab label='Semester III' {...a11yProps(2)} />
					<Tab label='Semester IV' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<div className='tab-heading'>Semester-I</div>
				<br />
				<br />
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Course Name</TableCell>
								<TableCell align='center'>L</TableCell>
								<TableCell align='center'>T</TableCell>
								<TableCell align='center'>P</TableCell>
								<TableCell align='center'>Credit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align='center'>Mathematical Physics - I</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Classical Mechanics</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Quantum Mechanics - I</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Electrodynamics - I</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Physics Lab - I</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>6</TableCell>
								<TableCell align='center'>4</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Sub-Total</TableCell>
								<TableCell align='center' colSpan={3}>
									16
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className='tab-heading'>Semester-II</div>
				<br />
				<br />
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Course Name</TableCell>
								<TableCell align='center'>L</TableCell>
								<TableCell align='center'>T</TableCell>
								<TableCell align='center'>P</TableCell>
								<TableCell align='center'>Credit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align='center'>
									Condensed Matter Physics - I
								</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Statistical Mechanics</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Quantum Mechanics - II</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Mathematical Physics - II</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Physics Lab - II</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>6</TableCell>
								<TableCell align='center'>4</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Computational Physics Lab</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>2</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Sub-Total</TableCell>
								<TableCell align='center' colSpan={3}>
									18
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div className='tab-heading'>Semester-III</div>
				<br />
				<br />
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Course Name</TableCell>
								<TableCell align='center'>L</TableCell>
								<TableCell align='center'>T</TableCell>
								<TableCell align='center'>P</TableCell>
								<TableCell align='center'>Credit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align='center'>
									Condensed Matter Physics - II
								</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Electrodynamics - II</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Electronics</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>
									Atomics and Molecular Physics
								</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Physics Lab - III</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>6</TableCell>
								<TableCell align='center'>4</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Seminar</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>2</TableCell>
								<TableCell align='center'>1</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Sub-Total</TableCell>
								<TableCell align='center' colSpan={3}>
									17
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<div className='tab-heading'>Semester-IV</div>
				<br />
				<br />
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Course Name</TableCell>
								<TableCell align='center'>L</TableCell>
								<TableCell align='center'>T</TableCell>
								<TableCell align='center'>P</TableCell>
								<TableCell align='center'>Credit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align='center'>Physics of Semiconductor</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Experimental Techniques</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>
									Nuclear and Particle Physics
								</TableCell>
								<TableCell align='center'>3</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Project</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>0</TableCell>
								<TableCell align='center'>10</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align='center'>Sub-Total</TableCell>
								<TableCell align='center' colSpan={3}>
									19
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</TabPanel>
			<div className='download'>
				<span>* New regulation w.e.f. 2019</span>
				<span>
					Click{' '}
					<a
						href='https://drive.google.com/file/d/187GmRa8Wni1Vit1I_amDl3s7nqBqnFZI/view?usp=drivesdk'
						target='_blank'
						rel='noreferrer'>
						here
					</a>{' '}
					to download the detailed course structure and syllabus.
				</span>
				<span>
					Click{' '}
					<a
						href='http://www.nits.ac.in/academics/info/Regulations/MSc_Regulation2019.pdf'
						target='_blank'
						rel='noreferrer'>
						here
					</a>{' '}
					to download the latest rules and regulations.
				</span>
			</div>
		</main>
	);
};

export default Msc;
