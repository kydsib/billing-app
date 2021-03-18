import React, { useState } from 'react'

import SinglePart from '../SinglePart/SinglePart'

const PartList = () => {
	const [partData, setPartData] = useState({
		id: '',
		partNo: '',
		qty: '',
		unit: '',
		condition: '',
		unitPrice: '',
	})
	const [partList, setPartList] = useState([])

	function handleSubmit() {
		// Sould I use ref's to collect data?
		const id = new Date().valueOf()
		const newPart = { ...partData, id }

		setPartList((prev) => [...prev, newPart])
		setPartData({
			id: '',
			partNo: '',
			qty: '',
			unit: '',
			condition: '',
			unitPrice: '',
		})
	}

	function handleChange(event) {
		const { name, value } = event.target

		setPartData({
			...partData,
			[name]: value,
		})
	}

	function handleDelete(id) {
		const valuesAfterDelete = partList.filter((item) => item.id !== id)
		setPartList([...valuesAfterDelete])
	}

	function handleSave(data) {
		const unchangedParts = partList.filter((item) => item.id !== data.id)

		const newData = [...unchangedParts, data]
		console.log(newData)

		setPartList(newData)
	}

	return (
		<table>
			<thead>
				<tr key="table-header">
					<th>Item</th>
					<th>Part Number / Description</th>
					<th>Qty</th>
					<th>Unit</th>
					<th>Cond</th>
					<th>Unit Price</th>
					<th>Total</th>
				</tr>
				<tr key="static">
					<td>Enter new</td>
					<td>
						<input
							type="text"
							placeholder="Part No / Description"
							name="partNo"
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

					<td>
						<button onClick={handleSubmit}>Add</button>
					</td>
				</tr>
				{partList
					? partList.map((item, index) => (
							<SinglePart
								deleteHandler={handleDelete}
								key={item.id}
								number={index + 1}
								id={item.id}
								partNo={item.partNo}
								qty={item.qty}
								unit={item.unit}
								condition={item.condition}
								unitPrice={item.unitPrice}
								saveHandler={handleSave}
							/>
					  ))
					: null}
			</thead>
			<tbody></tbody>
		</table>
	)
}

export default PartList
