import bannerImg from '../assets/banner.webp'

export const Banner = () => {
	return (
		<section>
			<div>
				<button>{'<'}</button>
				<button>{'>'}</button>
			</div>
			<div>
				<h2>
					<span>Tenemos un seguro de vida</span>
					<span>ideal para tí.</span>
				</h2>
				<button>¡COTIZA AHORA!</button>
			</div>
			<img src={bannerImg} alt='friends' />
		</section>
	)
}
