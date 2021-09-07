//* React Imports
import React, { useState, useEffect } from 'react';

//* Dependencies
import {
	Container,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	makeStyles,
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

//* CSS
import './css/AboutUs.scss';

//* CSS in JS
const useStyles = makeStyles(() => ({
	box: {
		backgroundColor: 'var(--theme3-100);',
		border: '2px solid var(--theme1-100)',
		borderRadius: '1vh',
		marginBottom: '0.5vh',
	},
	boxDetails: {
		backgroundColor: 'var(--theme3-100);',
		padding: '2vw 5vw',
		marginBottom: '1vh',
		border: '1px solid var(--theme1-100)',
		borderTop: '0 solid var(--theme1-100)',
	},
}));

const AboutUs = props => {
	const classes = useStyles();

	//! Page Title
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/db/aboutUs.json')
			.then(response => response.json())
			.then(res => {
				setData(res);
			});
	}, []);

	console.log(data);

	return (
		<main className='about-us'>
			{data &&
				data.sections.map((section, sectionIndex) => (
					<React.Fragment key={sectionIndex}>
						<div className={`heading${sectionIndex === 0 ? ' title' : ''}`}>
							{section.title}
						</div>
						<div className='msg'>
							{section.text.map((para, paraIndex) => (
								<React.Fragment key={paraIndex}>
									{para}
									<br />
									<br />
								</React.Fragment>
							))}
						</div>
					</React.Fragment>
				))}

			<div className='heading'>
				Programme Educational Objectives and Outcomes
			</div>
			<Container maxWidth='lg'>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
						className={classes.box}>
						<Typography>Programme Educational Objectives</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.boxDetails}>
						<Typography paragraph>
							{data && data.program.peo.title}
							<br />
							<br />
							<br />
							{data &&
								data.program.peo.points.map((point, pointIndex) => (
									<React.Fragment key={pointIndex}>
										{pointIndex + 1}.&emsp;{point}
										<br />
									</React.Fragment>
								))}
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
						className={classes.box}>
						<Typography>Programme Outcomes</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.boxDetails}>
						<Typography paragraph>
							{data && data.program.po.title}
							<br />
							<br />
							<br />
							{data &&
								data.program.po.points.map((point, pointIndex) => (
									<React.Fragment key={pointIndex}>
										{pointIndex + 1}.&emsp;{point}
										<br />
									</React.Fragment>
								))}
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Container>

			<div className='heading'>Message From HOD</div>
			<div className='msg'>
				{data &&
					data.hodMessage.map((para, paraIndex) => (
						<React.Fragment key={paraIndex}>
							{para}
							<br />
							<br />
						</React.Fragment>
					))}
			</div>

			<div className='heading'>Contact</div>
			<div className='msg contact'>
				{data &&
					data.contact.map((para, paraIndex) => (
						<React.Fragment key={paraIndex}>
							{para}
							<br />
						</React.Fragment>
					))}
			</div>
		</main>
	);
};

export default AboutUs;
