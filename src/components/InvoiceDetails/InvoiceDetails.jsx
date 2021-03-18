import React, { useState } from 'react'

import useForm from '../../hooks/useForm/useForm'

const InvoiceDetails = () => {
	const [currentDate, setCurrentDate] = useState(
		new Date().toISOString().slice(0, 10)
	)
	const { handleChange, handleSubmit, value, errors } = useForm()

	function handleDateChange(event) {
		const newDate = event.target.value
		setCurrentDate(newDate)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="no">
				No
				<input onChange={handleChange} name="no" id="no" />
			</label>
			{/* make this one not editable?  Or it should auto generate depending if it fits on A4? */}
			<label htmlFor="page">
				Page
				<input onChange={handleChange} name="page" id="page" />
			</label>
			<label htmlFor="date">
				Date
				<input
					type="date"
					onChange={handleDateChange}
					name="date"
					id="date"
					value={currentDate}
					data-testid="date-input"
				/>
			</label>
			<label htmlFor="po-ref">
				PO Ref.
				<input onChange={handleChange} name="po-ref" id="po-ref" />
			</label>
			<label htmlFor="terms">
				Terms
				<input onChange={handleChange} name="terms" id="terms" />
			</label>
			<label htmlFor="ship-via">
				Ship via
				<input onChange={handleChange} name="ship-via" id="ship-via" />
			</label>
			<label htmlFor="acc-number">
				Account No
				<input
					onChange={handleChange}
					name="acc-number"
					id="acc-number"
				/>
			</label>
			<label htmlFor="prepared-by">
				Prepared by
				<input
					onChange={handleChange}
					name="prepared-by"
					defaultValue="Paul"
					id="prepared-by"
				/>
			</label>
		</form>
	)
}

export default InvoiceDetails
