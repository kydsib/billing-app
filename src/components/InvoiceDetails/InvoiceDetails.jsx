import React, { useState } from 'react'

import useForm from '../../hooks/useForm/useForm'
import TextField from '../form/TextField/TextField'

const InvoiceDetails = () => {
	const formType = 'invoice'
	const [currentDate, setCurrentDate] = useState(
		new Date().toISOString().slice(0, 10)
	)
	const { handleChange, handleSubmit, values, errors } = useForm(formType)

	function handleDateChange(event) {
		const newDate = event.target.value
		setCurrentDate(newDate)
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label="Invoice Number"
				value={values.invoiceNumber}
				handleChange={handleChange}
				name="invoiceNumber"
			/>
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
			<TextField
				label="Po Ref"
				value={values.poRef}
				handleChange={handleChange}
				name="poRef"
			/>
			<TextField
				label="Terms"
				value={values.terms}
				handleChange={handleChange}
				name="terms"
			/>
			<TextField
				label="Ship Via"
				value={values.shipVia}
				handleChange={handleChange}
				name="shipVia"
			/>

			<TextField
				label="Account No"
				value={values.accNumber}
				handleChange={handleChange}
				name="accNumber"
			/>
			<TextField
				label="Prepared by"
				value={values.preparedBy}
				handleChange={handleChange}
				name="preparedBy"
			/>
		</form>
	)
}

export default InvoiceDetails
