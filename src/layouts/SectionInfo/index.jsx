import resorce01 from '../../assets/resource01.svg'
import resorce03 from '../../assets/resource03.svg'
import moneyIcon from '../../assets/money-icon.svg'
import securityIcon from '../../assets/security-icon.svg'
import laptopIcon from '../../assets/laptop-icon.svg'
import cardIdIcon from '../../assets/card-id-icon.svg'
import { ItemInfo } from './ItemInfo'

export const SectionInfo = () => {
	return (
		<section>
			<img src={resorce01} alt='resorce1' />
			<ul>
				<ItemInfo
					icon={moneyIcon}
					primary='Corto'
					secondary='Nuestra tecnología nos permite reducir costos y ofrecer tarifas
				competitivas.'
				/>
				<ItemInfo
					icon={securityIcon}
					primary='Seguridad'
					secondary='Estamos certificados para proteger todas tus transacciones.
				Asistencia a usuarios, Asistencia personalizada, soporte'
				/>
				<ItemInfo
					icon={laptopIcon}
					primary='Atención 24/7'
					secondary='Somos una empresa mexicana. Entendemos mejor que nadie tus necesidades.'
				/>
				<ItemInfo
					icon={cardIdIcon}
					primary='Registro rápido y sencillo'
					secondary='Regístrate y empieza a transaccionar en menos de 30 minutos.'
				/>
			</ul>
			<img src={resorce03} alt='resorce3' />
		</section>
	)
}
