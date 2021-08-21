//* React Imports
import React, { useEffect } from 'react';

//* Module Imports
import Carousel from '../components/Carousel';
import PhotoGallery from '../components/PhotoGallery';

//* CSS Imports
import './css/Gallery.scss';

//* React Component
const Gallery = props => {
	//! Page Title
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	return (
		<main className='gallery'>
			<div className='heading title'>Outreach Activities</div>
			<Carousel
				imgs={[
					'/img/nsd2020/header/1.jpg',
					'/img/nsd2020/header/2.jpg',
					'/img/nsd2020/header/3.jpg',
					'/img/nsd2020/header/4.jpg',
					'/img/nsd2020/header/5.jpg',
					'/img/nsd2020/header/6.jpg',
				]}
			/>

			<div className='heading'>National Science Day 2020</div>
			<PhotoGallery
				imgs={[
					'/img/nsd2020/body/1.jpg',
					'/img/nsd2020/body/2.jpg',
					'/img/nsd2020/body/3.jpg',
					'/img/nsd2020/body/4.jpg',
					'/img/nsd2020/body/5.jpg',
					'/img/nsd2020/body/6.jpg',
					'/img/nsd2020/body/7.jpg',
					'/img/nsd2020/body/8.jpg',
					'/img/nsd2020/body/9.jpg',
					'/img/nsd2020/body/10.jpg',
					'/img/nsd2020/body/11.jpg',
					'/img/nsd2020/body/12.jpg',
					'/img/nsd2020/body/13.jpg',
					'/img/nsd2020/body/14.jpg',
					'/img/nsd2020/body/15.jpg',
					'/img/nsd2020/body/16.jpg',
				]}
			/>
			<div className='heading'>DST-FIST Photos</div>
			<PhotoGallery
				imgs={[
					'https://lh3.googleusercontent.com/pw/ACtC-3fuC3G2J7rP6HfqgcXd5GWUL6lm2XhcZkCOxToWBHOvghqQCalhJHz3Lan1mc3iUm4TQW63_BfNAk72201PyQ11GAnjOjKuL5DkuK_2tx5xU0A-rFkuTd_lQavNwuEDXUezpm3BMWVI5zeVOn1OaAII=w1006-h671-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3e47osuXGqYAsFTaaCFecnX_GcY1XTVkhcXIjpWQkDI35ABuQmv4cpTzxQX5Ec3SxuavSljv1f8k7hmrJQIRqmgwChzBgp1ccMhmxdgZslxYuzgzEA0Uk9Ff0LwnUSBmlqJ9OTCeDsAhutDnnlfN859=w1006-h671-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3cvr3WOLFG5TDPQaWzRsD7w8fg1O584ltZOVC0n-B5OFfI88xa8oj5E20-RSV7NDkXmTqVGyn9TGDnnkDF15mzh9Dpet0gf96rRGcon19Ok5Vn4JU-G8V5svNBkVLTU6R0qe7h4dCgTrEGYMpycnRyX=w1006-h671-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3eb6SSxv5DljQcJOL3zcmOgdqN1T9ajkYlkaFntVAfNZvUE2dZYCUkF1Ey98vHrjpgJOdKv6_jA5olalrYnoocRp57_AvE8j321PZLOILDiLYY6svs7cHB9hj2_-V_SM9w4dF1YcG40YpK3PaqMxqnZ=w1006-h671-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3fDdpaDcMaxLkYceazy6grWBOjbFK134QQUwMEZO9olorB4Jwv70LnkLnQqIGTUnZsH9tkL0T8QXOoVghm1H2TVvzpfUrEwlVynA17ymHEhPvZQTS-BwBBDgNPj2eK7xKTlg6Wy5AWNANUTJsvhaidF=w1006-h671-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3eRMHZO7Aaulb4zk71ESAEO8Rabzkjc3XZ7TbuQZP-kOsHSiiIPjFRddYeb37oeJerL9HUIEs0KvgCOsUWWluDd2u8qehgit9ybHzYywLHejL0_fI85FE_OtxvlY-7CaFzKRK6aKXoOI_NEiVYyahlk=w1006-h671-no',
				]}
			/>
			<div className='heading'>Department Activity Photos</div>
			<PhotoGallery
				imgs={[
					'https://lh3.googleusercontent.com/pw/ACtC-3clc6pizQrBlOXJ7kpq33duHUpvqRVv3EwxDtSDfh4IvZEI-s2ze5x-EZ_-K_IhPGAelVbV7CoHGXZS_tXwML0ytG50qy-KKZ_orZX6m05wOjHRJTWun0hoVJbOlSkjTEBzrs0SbGMc_ij5-AMJpyW9=w929-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3eBVW8ZitnRXuXclpNSrnabgQxQ2wFFF8faK-YCRQL-th-bpbXN4jJ3RYD3SbLwplUgOaFexcB48JU69ZWuUdkWa72KLywx3fgOH_1Zw6u8SHR0z8oh4omqIgtKQb1yRyeTuhiTNIkUsbmsqHzPt_8b=w929-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3e7xMCensVNimSe7RTFCcByqYdHvmIaApybH2OZyDNmZTAfzvZh7giS14CnJQr57YuCveaI4o0oFVIeAXJlwjVIySbtw1-qDxnXJ_j3cBF6TuHzxV9jsUDiGMeLMg86aCSYLUEv8W1WTxdBgpilTMko=w929-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3fknsinEnfGWdiKQpcQHHJKxaWRmSnZvnWzo4Kd_SABYipTC_uZxWpTPqhDb60_ybe8tp1WJv4-AwTILvYowXrvDPk6DQ-rDOwL25-VW44yf_B37S5KxW9YxoucVrpgza4ZFHW3blfX6_gI33VQXIwq=w929-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3e0pP3tI45uAh681oljwbaymGDJYBWRq5H3T0TVGcKizvOwb4q7bJuJhu5Kp05ZKMCPcqLmyNG79UdihpHJyyAdg3XMawrHXLXaw8Ldd_4pKus84TLfe-ZGbsoKRw9n6lCaKFx_34q2who3nqDINgsF=w929-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3c7bS8xm2fhR4tWGHvje_-fNH6QMSumLB_j-lO47BnN3wj4a3SrYdst_7TSwcA77WxLlhOfAfjPAn6ojct0elB9dhn4gqc75PAvxNNmVM7XJCByiCexP0mFxhcqlyJi0vCTqwZyV9VGKJaXZN7vuw-I=w929-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3fWh7P6SNoXwr6lCnMwO7bTmKC1vUQYsAgZUdIIMgDADmu1XRmIlvprlZHldQDcWkCUWoyH7biVocRP_HHdZbvH9I-kSSBl-ghePCGHDwZ-5BjgD--wD2bkCVeFc7Bc6JfsPLupB3sw-bTtVtQytKfj=w927-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3eExbyqeAN6LgvGtOuS9WC_WTfxpzhxCgHS1zPHV0QvvEyGEvCPWl3dBegdTAGhXjqVkfdT4fVkbmQs63WMH1wCCYltrdopUKwqAUQbZgXUW523DHaLM7iUrpXj4LXffUN-C33upPzoxfozcZATFd6p=w927-h695-no',
					'https://lh3.googleusercontent.com/pw/ACtC-3cd19xQXjujm-NUEJu8dFJziere55wSnfsbIlwgFHpVB0QKjcNivG9zN22abr1QSVQpL5RQn6oUc0GxQQb2xikbW8X6Z6HhR9JEZoLX54VDqPF96UUqvcAtNm4LctHe0A99mbcOnCCC07fyLTiUDlpy=w1006-h566-no',
				]}
			/>
		</main>
	);
};

export default Gallery;
