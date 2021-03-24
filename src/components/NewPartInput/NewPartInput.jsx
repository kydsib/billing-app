import React from 'react'

// what happens when I'm not passing testId?
const NewPartInput = ({ partData, handleChange, testId }) => {
	return (
		<>
			<td>
				<input
					placeholder="Part No / Description"
					name="partNo"
					data-testid={testId}
					value={partData.partNo}
					onChange={handleChange}
				/>
			</td>
			<td>
				<input
					name="qty"
					type="number"
					placeholder="Quantity"
					value={partData.qty}
					onChange={handleChange}
				/>
			</td>
			<td>
				<input
					name="unit"
					placeholder="Unit"
					value={partData.unit}
					onChange={handleChange}
				/>
			</td>
			<td>
				<input
					name="condition"
					placeholder="Condition"
					value={partData.condition}
					onChange={handleChange}
				/>
			</td>
			<td>
				<input
					name="unitPrice"
					placeholder="Unit Price"
					type="number"
					value={partData.unitPrice}
					onChange={handleChange}
				/>
			</td>
		</>
	)
}

export default NewPartInput
