//* React
import { useEffect } from 'react';

//* Dependencies
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
} from '@material-ui/lab';

//* CSS
import './css/Phd.scss';

const Phd = props => {
	//! Page Title
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	return (
		<main className='phd'>
			<div className='heading'>Ph. D.</div>
			<p className='msg'>
				The course Research Methodology (IC 001) (6 credits) is mandatory for
				all Ph.D. scholars. In addition to this, a minimum of 12 credits
				Ph.D./PG level course work is required.
			</p>

			<Timeline align='alternate'>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<span className='bold'>Journey Begins</span> | Admission
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<span className='bold'>1st-2nd Sem</span> | Course Work
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<span className='bold'>3rd Sem</span> | Comprehensive Examination
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<span className='bold'>4th Sem</span> | Registration Seminar
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<span className='bold'>5th Sem onwards</span> | Progress Seminar
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent></TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent></TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>Synopsis Seminar</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>Thesis Submission</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>Defense Seminar</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
					</TimelineSeparator>
					<TimelineContent>
						<span className='bold'>Journey Ends</span> | Ph. D. Degree
					</TimelineContent>
				</TimelineItem>
			</Timeline>

			<div className='download'>
				* New regulation w.e.f. 2014
				<br />
				<br />
				Click{' '}
				<a
					href='http://www.nits.ac.in/admissions/PG-Admission-2014/PhD_Regulation_July_2014.pdf'
					target='_blank'
					rel='noreferrer'
					className='bold'>
					here
				</a>{' '}
				to download the latest rules and regulations.
			</div>
		</main>
	);
};

export default Phd;
