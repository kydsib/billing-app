import React from 'react'

const TextField = ({
	type = 'text',
	label,
	placeHolder,
	value,
	name,
	handleChange,
}) => {
	const id = label
		.toLowerCase()
		.split(' ')
		.map((word) => word.replace(/[^a-z]+/g, ''))
		.join('-')

	return (
		<div>
			<div>
				<label htmlFor={id}>{label}</label>
			</div>
			<input
				placeholder={placeHolder}
				id={id}
				value={value}
				name={name}
				type={type}
				onChange={handleChange}
				// onChange={(currentEvent) =>
				// 	onChange(currentEvent.target.value, currentEvent)
				// }
			/>
		</div>
	)
}

export default TextField
