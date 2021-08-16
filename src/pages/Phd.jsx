//* React
import { useEffect } from 'react';

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

			{/* TODO: Add Styles */}
			<div className='timeline'>
				{/* Left Labels */}
				<div className='tl'>
					<div className='tl-left'>
						<div className='tl-box-left'>
							<div className='tl-time-left'>Journey Begins</div>
							<div className='tl-txt-time'>Admission</div>
						</div>

						<div className='tl-mt-left'></div>

						<div className='tl-box-left'>
							<div className='tl-time-left'>3rd Sem</div>
							<div className='tl-txt-time'>Comprehensive Examination</div>
						</div>

						<div className='tl-mt-left'></div>

						<div className='tl-box-left'>
							<div className='tl-time-left'>5th Sem onwards</div>
							<div className='tl-txt-time'>Progress Seminar</div>
						</div>

						<div className='tl-mt-left gap'></div>

						<div className='tl-box-left'>
							<div className='tl-txt'>Thesis Submission</div>
						</div>

						<div className='tl-mt-left'></div>

						<div className='tl-box-left'>
							<div className='tl-time-left'>Journey Ends</div>
							<div className='tl-txt-time'>Ph. D. Degree</div>
						</div>
					</div>

					{/* Timeline Line */}
					<div className='tl-middle'>
						<div className='tl-line'>
							<div className='tl-circle'></div>
							<div className='tl-circle'></div>
							<div className='tl-circle'></div>
							<div className='tl-circle'></div>
							<div className='tl-circle'></div>
							<div className='tl-circle gap'></div>
							<div className='tl-circle'></div>
							<div className='tl-circle'></div>
							<div className='tl-circle'></div>
						</div>
					</div>

					{/* Right Labels */}
					<div className='tl-right'>
						<div className='tl-mt-right'></div>

						<div className='tl-box-right'>
							<div className='tl-time-right'>1st-2nd Sem</div>
							<div className='tl-txt-time'>Course Work</div>
						</div>

						<div className='tl-mt-right'></div>

						<div className='tl-box-right'>
							<div className='tl-time-right'>4th Sem</div>
							<div className='tl-txt-time'>Registration Seminar</div>
						</div>

						<div className='tl-mt-right'></div>

						<div className='tl-box-right gap'>
							<div className='tl-txt'>Synopsis Seminar</div>
						</div>

						<div className='tl-mt-right'></div>

						<div className='tl-box-right'>
							<div className='tl-txt'>Defense Seminar</div>
						</div>

						<div className='tl-mt-right'></div>
					</div>
				</div>
			</div>

			<div className='download'>
				<span>* New regulation w.e.f. 2014</span>
				<span>
					Click{' '}
					<a
						href='http://www.nits.ac.in/admissions/PG-Admission-2014/PhD_Regulation_July_2014.pdf'
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

export default Phd;
