/* eslint-disable no-unused-vars */
//* React
import { useState, useEffect } from 'react';

//* Dependencies
import PropTypes from 'prop-types';
import {
	AppBar,
	Tabs,
	Tab,
	Box,
	Typography,
	makeStyles,
} from '@material-ui/core';

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
					<Typography component={'span'}>{children}</Typography>
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

const Btech = props => {
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
		<main className='btech'>
			<div className='heading'>B. Tech. First Year Courses</div>
			<p>
				Physics theory (PH 101) and laboratory (PH 111) - these two courses are
				offered to first year B. Tech. students of all branches.
			</p>

			<div className='course-heading'>Physics (PH 101)</div>
			<div className='course-objectives'>
				<ol>
					<li>
						To solve dynamics of damped and forced oscillating system problems.
					</li>
					<li>
						To know the significance of Maxwell’s equations in the Engineering
						applications of electromagnetic waves.
					</li>
					<li>
						Explain Quantum Mechanics to understand wave particle dualism.
						Necessity of quantum mechanics to explore the behavior of subatomic
						particles. Evaluate the Eigenvalues and Eigenfunctions of a
						particle.
					</li>
					<li>
						To understand the basic electronics properties of materials. To
						demonstrate the success of quantum free electron theory over
						classical free electron theory. To examine the probability of
						occupancy of an electron in an energy state at different
						temperatures.
					</li>
				</ol>

				<AppBar position='static'>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='simple tabs example'>
						<Tab label='Module I' {...a11yProps(0)} />
						<Tab label='Module II' {...a11yProps(1)} />
						<Tab label='Module III' {...a11yProps(2)} />
						<Tab label='Module IV' {...a11yProps(3)} />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					<div className='module-heading'>Waves and Oscillations</div>
					<div className='lecture'>
						<span className='bold'>Lecture 1:</span> Introduction to vibration
						and oscillation, simple harmonic oscillator: equation of motion,
						general solution, Characteristic of SHM: amplitude, time period,
						phase velocity, acceleration, total energy
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 2 and 3:</span> Damped harmonic
						motion: damping forces, practical examples of damped oscillation,
						equation of motion for damped oscillation, solution at different
						damping conditions: weak, large and critical damping
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 4:</span> Forced oscillation of a
						damped harmonic oscillator, general solution to equation of motion,
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 5 and 6:</span> Steady state solution
						for forced oscillation, low frequency, high frequency and mid
						frequency conditions for forced oscillation, Resonance, power of
						forced oscillator
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 7:</span> Coupled oscillation:
						equation of motion for coupled oscillation, solutions
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 8:</span> Introduction of normal
						modes and normal coordinate
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className='module-heading'>Electromagnetic Theory</div>
					<div className='lecture'>
						<span className='bold'>Lecture 1:</span> Maxwell's equation:
						Electrodynamics before Maxwell
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 2:</span> Displacement current,
						Maxwell's equation in vacuum
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 3:</span> Maxwell's equation in
						matter. Boundary conditions
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 4:</span> Conservation laws:
						Continuity equation, Poynting's theorem
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 5:</span> Electromagnetic waves: The
						wave equation, Sinusoidal waves, Polarization
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 6 and 7:</span> EM waves in vacuum,
						Monochromatic plane waves, Energy in electromagnetic waves, EM waves
						in matter,
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 8 and 9:</span> Reflection and
						transmission at normal incidence
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 10 and 11:</span> Reflection and
						transmission at oblique incidence
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 12:</span> EM waves in conductors,
						Reflection at a conducting surface
					</div>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div className='module-heading'>Quantum Mechanics</div>
					<div className='lecture'>
						<span className='bold'>Lecture 1:</span> Origin and history of
						quantum mechanics, particle aspect of the wave and vice-versa,
						matrix and wave mechanics
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 2:</span> Particle aspect of wave –
						blackbody radiation, photo-electric effect, Wave aspect of particle
						- de Broglie’s hypothesis, matter wave
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 3:</span> Electron diffraction:
						Davison-Germer experiment, Particle vs wave: classical scenario &
						quantum scenario – double slit experiment
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 4:</span> Wave particle duality,
						Heisenberg’s uncertainty principle, wavefunction, its properties and
						probabilistic interpretation
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 5:</span> Wave packets, group
						velocity & phase velocity and relation between them in dispersive
						medium
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 6:</span> Development of the wave
						equation, Time dependent Schrodinger equation
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 7:</span> Introduction to wave
						function, Probabilistic interpretation of wave function, Probability
						density
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 8:</span> Quantum mechanical
						operators (position, momentum, energy), expectation value,
						correspondence principle, Eigen functions, Eigenvalue
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 9:</span> Stationary states, Time
						independent Schrodinger equation
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 10:</span> Infinite square well
						problem, allowed energies and wavefunctions, Normalization,
						expectation values
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 11 and 12:</span> Potential barrier
						problem, tunneling phenomena, example of α-particle decay
					</div>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<div className='module-heading'>Solid State Physics</div>
					<div className='lecture'>
						<span className='bold'>Lecture 1:</span> Classical theory of
						electrical conduction, Drude model; Success and failures of
						classical model
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 2:</span> Band theory of solid
						(Qualitative description); Classification of materials on the basis
						of band theory of solids (qualitative description); Bloch’s quantum
						theory of electrical conduction (Qualitative)
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 3:</span> Distribution of electrons
						between the energy states-the Fermi-Dirac distribution; temperature
						variation of Fermi-Dirac distribution function
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 4 and 5:</span> The density of energy
						states (using free electron model) of metal in 3-D; Estimation of
						Fermi energy for metals
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 6:</span> Fermi surface and Fermi
						Velocity; Intrinsic and Extrinsic semiconductors; Charge carriers in
						semiconductor; Concepts of hole; Free electron model applied to
						semiconductors
					</div>

					<div className='lecture'>
						<span className='bold'>Lecture 7:</span> The Hall effect,
						Magnetoresistance
					</div>
				</TabPanel>
			</div>
			<div className='course-heading'>Physics Laboratory (PH 111)</div>
			<div className='course-objectives'>
				<ol>
					<li>
						To gain practical knowledge by applying the experimental methods to
						correlate with the Physics theory.
					</li>
					<li>
						To learn the usage of electrical and optical systems for various
						measurements.
					</li>
					<li>
						Apply the analytical techniques and graphical analysis to the
						experimental data.
					</li>
					<li>
						To develop intellectual communication skills and discuss the basic
						principles of scientific concepts in a group.
					</li>
				</ol>
			</div>
			<div className='course-sub-heading'>List of Experiments</div>
			<div className='course-content'>
				<ol>
					<li>To calibrate an ammeter with the help of a potentiometer.</li>
					<li>
						To study the twist in the thin rod by statical method using Barton's
						horizontal apparatus and thus to determine the modulus of rigidity
						of the material of the rod.
					</li>
					<li>
						To study the bending of a beam supported at its ends and loaded at
						the middle and thus to determine the young's modulus of the material
						of the beam.
					</li>
					<li>
						To determine the refractive index of the material of a given prism
						using a spectrometer.
					</li>
					<li>
						To determine frequency of a transverse waves and mass per unit
						length of given wire by using sonometer apparatus
					</li>
					<li>
						To study the charging and discharging of a capacitor and hence to
						determine it's time constant
					</li>
					<li>
						To study the variation of magnetic field with distance along the
						axis of a circular coil carrying current by plotting a graph.
					</li>
					<li>
						To determine the wavelength of sodium light using single slit
						diffraction.
					</li>
					<li>Comparison of two low resistances by using meter bridge.</li>
				</ol>
			</div>
			<div className='download'>
				<span>* New regulation w.e.f. 2018</span>
				<span>
					Click{' '}
					<a
						href='http://www.nits.ac.in/academics/info/Regulations/BTech_Regulations_NITS_2018.pdf'
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

export default Btech;
