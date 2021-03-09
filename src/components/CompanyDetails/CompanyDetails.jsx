import React from 'react'

import useFrom from '../../hooks/useForm/useForm'

const CompanyDetails = () => {
	const { handleChange, handleSubmit, values, errors } = useFrom()

	return (
		<form onSubmit={handleSubmit}>
			<div className="left-side">
				<label htmlFor="name">
					Company Name:
					<input
						name="name"
						onChange={handleChange}
						id="name"
						defaultValue={values.name}
					/>
				</label>
				<label htmlFor="address">
					Address:
					<input
						name="address"
						onChange={handleChange}
						id="address"
						defaultValue={values.address}
					/>
				</label>
				<label htmlFor="country">
					Country:
					<input
						name="country"
						onChange={handleChange}
						id="country"
						defaultValue={values.country}
					/>
				</label>
			</div>
			<div className="right-side">
				<label htmlFor="company-code">
					Company Code:
					<input
						name="code"
						onChange={handleChange}
						id="company-code"
						defaultValue={values.code}
					/>
				</label>
				<label htmlFor="vat">
					Vat:
					<input
						name="vat"
						onChange={handleChange}
						id="vat"
						defaultValue={values.vat}
					/>
				</label>
				<label htmlFor="phone">
					Phone number:
					<input
						name="phone"
						onChange={handleChange}
						id="phone"
						defaultValue={values.phone}
					/>
				</label>
			</div>
		</form>
	)
}

export default CompanyDetails
