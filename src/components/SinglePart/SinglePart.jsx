import React, { useState } from 'react'

import NewPartInput from '../NewPartInput/NewPartInput'

const SinglePart = ({ number, item, deleteHandler, saveHandler }) => {
	const [partData, setPartData] = useState({
		id: item.id,
		partNo: item.partNo,
		qty: item.qty,
		unit: item.unit,
		condition: item.condition,
		unitPrice: item.unitPrice,
	})

	const [isEditing, setIsEditing] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const total = (partData.qty * partData.unitPrice).toFixed(2)

	// Should I create custom btn and pass on click handlers down to it?

	function handleChange(event) {
		const { name, value } = event.target

		setPartData({
			...partData,
			[name]: value,
		})
	}

	function handleEdit() {
		setIsEditing(true)
	}

	function handleDelete() {
		setIsDeleting(true)
	}

	function handleSave() {
		saveHandler(partData)
		setIsEditing((prev) => !prev)
	}

	function confimDelete() {
		deleteHandler(partData.id)
	}

	function handleCancel() {
		if (isDeleting) {
			setIsDeleting((prev) => !prev)
		}
		if (isEditing) {
			setIsEditing((prev) => !prev)
		}
	}

	function renderButtons() {
		if (isEditing) {
			return (
				<td>
					<button onClick={handleSave}>Save</button>
					<button onClick={handleCancel}>Cancel</button>
				</td>
			)
		} else if (isEditing === false && isDeleting === false) {
			return (
				<td>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</td>
			)
		} else if (isDeleting) {
			return (
				<td>
					<button onClick={confimDelete}>Confirm delete</button>
					<button onClick={handleCancel}>Cancel</button>
				</td>
			)
		}
	}

	function renderPart() {
		if (isEditing) {
			return (
				<>
					<td>{number}</td>

					<NewPartInput
						handleChange={handleChange}
						partData={partData}
						testId="single-partNo"
					/>
					<td>{total}</td>
				</>
			)
		} else {
			return (
				<>
					<td>{partData.number}</td>
					<td data-testid="partNo">{partData.partNo}</td>
					<td>{partData.qty}</td>
					<td>{partData.unit}</td>
					<td>{partData.condition}</td>
					<td>{partData.unitPrice}</td>
					<td>{total}</td>
				</>
			)
		}
	}

	return (
		<>
			<tr>
				{renderPart()}
				{renderButtons()}
			</tr>
		</>
	)
}

export default SinglePart
