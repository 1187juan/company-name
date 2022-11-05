import resource02 from '../../assets/resource02.svg'
import formIcon from '../../assets/form-icon.svg'
import moneyCircleIcon from '../../assets/money-circle-icon.svg'
import laptopIcon from '../../assets/laptop-icon.svg'
import doctorIcon from '../../assets/doctor-icon.svg'
import { ItemInstruction } from './ItemInstruction'

export const SectionIntructions = () => {
	return (
		<section>
			<img src={resource02} alt='resorce02' />
			<div>
				<h2>Que lo más importante sea tu salud, cuídala con nosotros</h2>
				<ul>
					<ItemInstruction
						icon={formIcon}
						number={1}
						description='Responde algunas preguntas sencillas'
					/>
					<ItemInstruction
						icon={moneyCircleIcon}
						number={2}
						description='Obtenga precios en un instante*.'
					/>
					<ItemInstruction
						icon={laptopIcon}
						number={3}
						description='Inicie su solicitud en línea.'
					/>
					<ItemInstruction
						icon={doctorIcon}
						number={4}
						description='Profesionales con más de 50 años de experiencia en seguros.'
					/>
				</ul>
				<button>¡COTIZAR AHORA!</button>
			</div>
		</section>
	)
}
