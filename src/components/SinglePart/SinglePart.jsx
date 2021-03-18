import React, { useState } from 'react'

const SinglePart = ({
	number,
	partNo,
	id,
	qty,
	unit,
	condition,
	unitPrice,
	deleteHandler,
	saveHandler,
}) => {
	const [partData, setPartData] = useState({
		id,
		partNo,
		qty,
		unit,
		condition,
		unitPrice,
	})

	const [isEditing, setIsEditing] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const total = (qty * unitPrice).toFixed(2)

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
		deleteHandler(id)
	}

	function handleCancel() {
		// ar turetu nusiresetinti value jei edit metu ji buvo pakeista, bet neissaugota?
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
					<td>
						<input
							name="partNo"
							type="text"
							data-testid="single-partNo"
							defaultValue={partNo}
							onChange={handleChange}
						/>
					</td>
					<td>
						<input
							name="qty"
							onChange={handleChange}
							type="number"
							defaultValue={qty}
						/>
					</td>
					<td>
						<input
							name="unit"
							onChange={handleChange}
							placeholder="Unit"
							defaultValue={unit}
						/>
					</td>
					<td>
						<input
							name="condition"
							onChange={handleChange}
							placeholder="Condition"
							defaultValue={condition}
						/>
					</td>
					<td>
						<input
							name="unitPrice"
							onChange={handleChange}
							placeholder="Unit Price"
							defaultValue={unitPrice}
						/>
					</td>
					<td>{total}</td>
				</>
			)
		} else {
			return (
				<>
					<td>{number}</td>
					<td data-testid="partNo">{partNo}</td>
					<td>{qty}</td>
					<td>{unit}</td>
					<td>{condition}</td>
					<td>{unitPrice}</td>
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
