export const ItemInstruction = ({ icon, number, description }) => {
	return (
		<li>
			<p>{number}</p>
			{icon}
			<p>{description}</p>
		</li>
	)
}
