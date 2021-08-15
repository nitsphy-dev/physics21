//* React Imports
import { useEffect } from 'react';

//* Dependencies
import {
	Container,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

//* CSS
import './css/AboutUs.scss';

const AboutUs = props => {
	//! Page Title
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	return (
		<main className='about-us'>
			<div className='heading title'>About Us</div>
			<div className='msg'>
				The Department of Physics at National Institute of Technology Silchar
				has come a long way since 1969 when it started functioning independently
				as a Department in the erstwhile REC avatar of NIT Silchar. Since its
				inception, the department is supporting the flagship B. Tech. programs
				of the institute with physics theory and practical courses. Although
				research on Nuclear Physics was carried out in REC regime during the
				late eighties in collaboration with BARC, a full-fledged Ph. D. program
				was started by the department in 2002 when NIT Silchar came to its
				existing form. Later, the Department took the next leap forward by
				introducing the PG program, two-year M. Sc. in Applied Physics, in 2012.
				In this small span of time, our Ph. D. and PG alumni started to bring
				laurels to the department with their achievements in higher studies and
				in rendering service to the nation in various capacities. Currently, the
				Department is having eight faculty members, 18 research scholars and 25
				PG students.
				<br />
				<br />
				The Department of Physics is actively involved in research in the
				emerging areas of science and technology that include Solar Energy
				Materials, Solar Photocatalysis, Energy storage devices and materials,
				Semiconductor Nanostructure and Devices, Switching devices,
				Ferroelectrics and related materials, Multiferroics, Bulk Crystal
				Growth, Nonlinear optics, Image processing, Theoretical Condensed Matter
				Physics, Perturbation Theory and High Energy Physics. The Department is
				equipped with state-of-the-art experimental as well as computational
				facilities such as UV-VIS NIR Spectrophotometer, Hybrid Sputtering and
				e-beam Unit, Keithley 4200 semiconductor Parameter analyser and High
				Performing Computer (Param Shavak).
				<br />
				<br />
				Of late, the Department is sponsored by the Department of Science &
				Technology (DST), GoI under FIST scheme which will further supplement
				our research and teaching programs.
			</div>

			<div className='heading'>Vision</div>
			<div className='msg'>
				Our vision is to be a model of excellence in multidisciplinary branches
				of science and research by producing world class graduates prepared for
				lifelong engagements in the rapidly changing field of science and
				related field.
			</div>

			<div className='heading'>Mission</div>
			<div className='msg'>
				Our mission is to impart quality education to students and provide a
				comprehensive understanding of Physics, built upon basic fundamental of
				science and technology and to provide quality manpower to meet the
				future challenges.
			</div>

			<div className='heading'>
				Programme Educational Objectives and Outcomes
			</div>
			<Container maxWidth='sm'>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'>
						<Typography>Programme Educational Objectives</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography paragraph>
							The Programme Educational Objectives of the B.Tech. in Physics
							programme of National Institute of Technology Silchar are:
						</Typography>
						<br />
						<br />
						<ol>
							<li>
								To identify, formulate, create, analyze, design, develop and
								optimize various problems related to various fields of physics
								through basic knowledge.
							</li>
							<li>
								To the industry by applying the skills and knowledge acquired
								during the course period.
							</li>
							<li>
								To be prepared for the successful pursuit of graduate studies
								and shall have abilities to engage in lifelong learning in
								various field and will understand the challenges of a
								dynamically and globalised changing world adapting their skills
								through continuous learning and self improvement.
							</li>
							<li>
								To demonstrate the ability of gauging the impact of computing on
								society, and possess knowledge of the ethical, social and
								professional implications/responsibilities of their work.
							</li>
							<li>
								To to inculcate a sense of ethics, professionalism and effective
								communication skills amongst graduates.
							</li>
						</ol>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'>
						<Typography>Programme Outcomes</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography paragraph>
							Program Outcomes (POs) of the Engineering Physics course in B.
							Tech are as follows:
						</Typography>
						<br />
						<br />
						<ol>
							<li>
								Apply the concepts of fundamental Physics in their respective
								fields
							</li>
							<li>
								Design and conduct experiments in the relevant areas of physics
								and as well as to analyze and interpret the results
							</li>
							<li>
								Identify, formulate and solved physical problems related to
								engineering
							</li>
							<li>Communicate effectively</li>
							<li>
								Understand the impact of engineering physics in a global,
								economic, environment and social context
							</li>
							<li>
								Use fundamental techniques and skills of physics in modern
								engineering
							</li>
						</ol>
						<br />

						<Typography paragraph>
							After the completion of PG courses, students will be able to:
						</Typography>
						<ul>
							<li>
								Design and conduct experiments, as well as to analyze and
								interpret data.
							</li>
							<li>Function on multi-disciplinary teams</li>
							<li>Understand professional and ethical responsibility</li>
							<li>
								Use the modern techniques, skills, and modern equipments
								necessary for research
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>
			</Container>

			<div className='heading'>Message From HOD</div>
			<div className='msg'>
				Welcome to the Department of Physics at NIT Silchar!
				<br />
				<br />
				Department of Physics, NIT Silchar is engaged in research and teaching
				at the frontier areas of experimental and theoretical physics. The
				Department has made its mark at the national and international levels by
				participating in numerous conferences and publishing quality scientific
				papers. Our faculties are also engaged in collaborative research with
				other departments in the NIT Silchar as well as with different R&D
				institutions in the country and abroad.
				<br />
				<br />
				Currently, there is a strong foundation laid out for undergraduate and
				master students alongside doctoral research training. The Department is
				thriving on high-quality research done in our well-equipped research
				labs. Recently, in 2017, the Department was funded by DST under the
				DST-FIST scheme for five years. We are striving for capacity building of
				our R&D infrastructures to cater experimental and computational research
				needs in the department as well as to support the research community in
				this region. Over the years, the Department has also produced several
				bright students who are now working at well-known institutes in India
				and abroad.
				<br />
				<br />
				Apart from the regular curricula, Department frequently engages itself
				by arranging formal and informal meetings by inviting experts to
				motivate our students. The outreach activity such as annual science day
				celebration has become an integral part of departmental activities,
				which encourages students to express innovative ideas through talks and
				demonstrations. This program also nurtures the nearby school students
				with curiosity and scientific temperaments. In addition, our students
				arrange various cultural activities in the department mainly to bring in
				a sense of family among us. The Department proudly cherishes the cordial
				bonding among the faculties, students and staff.
			</div>

			<div className='heading'>Contact</div>
			<div className='msg'>
				Dr. Subhasis Panda,
				<br />
				Head of the Department,
				<br />
				Department of Physics,
				<br />
				National Institute of Technology Silchar,
				<br />
				Silchar - 788010, Assam.
				<br />
				Phone: 8399920286
				<br />
				Email: hod@phy.nits.ac.in
			</div>
		</main>
	);
};

export default AboutUs;
