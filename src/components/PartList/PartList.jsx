import React, { useState } from 'react'

import NewPartInput from '../NewPartInput/NewPartInput'
import SinglePart from '../SinglePart/SinglePart'

const PartList = () => {
	const initialState = {
		id: '',
		partNo: '',
		qty: '',
		unit: '',
		condition: '',
		unitPrice: '',
	}
	const [partData, setPartData] = useState(initialState)
	const [partList, setPartList] = useState([])

	function handleSubmit() {
		// Sould I use ref's to collect data?
		const id = new Date().valueOf()
		const newPart = { ...partData, id }

		setPartList((prev) => [...prev, newPart])
		setPartData(initialState)
	}

	function handleChange(event) {
		const { name, value } = event.target

		setPartData({
			...partData,
			[name]: value,
		})
	}

	function handleDelete(id) {
		const newState = partList.filter((item) => item.id !== id)
		setPartList([...newState])
	}

	function handleSave(data) {
		const unchangedParts = partList.filter((item) => item.id !== data.id)

		const newData = [...unchangedParts, data]

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
					<NewPartInput
						partData={partData}
						handleChange={handleChange}
					/>
					<td>
						<button onClick={handleSubmit}>Add</button>
					</td>
				</tr>
				{partList
					? partList.map((item, index) => (
							<SinglePart
								deleteHandler={handleDelete}
								key={item.id}
								item={item}
								number={index + 1}
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
