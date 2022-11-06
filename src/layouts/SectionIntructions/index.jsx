import resource02 from '../../assets/resource02.svg'
import { DoctorIcon, FormIcon, LaptopIcon, MoneyCircleIcon } from '../../icons'
import { ItemInstruction } from './ItemInstruction'

export const SectionIntructions = () => {
	return (
		<section>
			<img src={resource02} alt='resorce02' />
			<div>
				<h2>Que lo más importante sea tu salud, cuídala con nosotros</h2>
				<ul>
					<ItemInstruction
						icon={<FormIcon />}
						number={1}
						description='Responde algunas preguntas sencillas'
					/>
					<ItemInstruction
						icon={<MoneyCircleIcon />}
						number={2}
						description='Obtenga precios en un instante*.'
					/>
					<ItemInstruction
						icon={<LaptopIcon />}
						number={3}
						description='Inicie su solicitud en línea.'
					/>
					<ItemInstruction
						icon={<DoctorIcon />}
						number={4}
						description='Profesionales con más de 50 años de experiencia en seguros.'
					/>
				</ul>
				<button>¡COTIZAR AHORA!</button>
			</div>
		</section>
	)
}
