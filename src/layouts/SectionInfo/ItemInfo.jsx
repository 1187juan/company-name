export const ItemInfo = ({ icon, primary, secondary = '' }) => {
	return (
		<li>
			<img src={icon} alt={primary} />
			<div>
				<p>{primary}</p>
				<p>{secondary}</p>
			</div>
		</li>
	)
}
