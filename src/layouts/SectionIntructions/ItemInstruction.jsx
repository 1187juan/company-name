export const ItemInstruction = ({ icon, number, description }) => {
	return (
		<li>
			<p>{number}</p>
			<img src={icon} alt={number} />
			<p>{description}</p>
		</li>
	)
}
