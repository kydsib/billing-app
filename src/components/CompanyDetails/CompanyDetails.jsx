import React from 'react'

import useFrom from '../../hooks/useForm/useForm'
import TextField from '../form/TextField/TextField'

const CompanyDetails = () => {
	const formType = 'company-details'
	const { handleChange, handleSubmit, values, errors } = useFrom(formType)

	return (
		<form onSubmit={handleSubmit}>
			<div className="left-side">
				<TextField
					label="Company name"
					value={values.name}
					handleChange={handleChange}
					name="name"
				/>
				<TextField
					label="Address"
					value={values.address}
					handleChange={handleChange}
					name="address"
				/>
				<TextField
					label="Country"
					value={values.country}
					handleChange={handleChange}
					name="country"
				/>
			</div>
			<div className="right-side">
				<TextField
					label="Company Code"
					type="number"
					value={values.code}
					handleChange={handleChange}
					name="code"
				/>
				<TextField
					label="Vat"
					value={values.vat}
					handleChange={handleChange}
					name="vat"
				/>
				<TextField
					label="Phone"
					value={values.phone}
					handleChange={handleChange}
					name="phone"
				/>
			</div>
		</form>
	)
}

export default CompanyDetails
