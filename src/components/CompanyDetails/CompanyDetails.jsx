import React, { useState } from 'react'

const CompanyDetails = ({
	companyName,
	companyAddress,
	companyCountry,
	companyCode,
	companyVatNumber,
	companyTelephone,
}) => {
	// use one obj instead of many separate fields?
	const [name, setName] = useState(companyName)
	const [address, setAddress] = useState(companyAddress)
	const [country, setCountry] = useState(companyCountry)
	const [code, setCode] = useState(companyCode)
	const [vat, setVat] = useState(companyVatNumber)
	const [phone, setPhone] = useState(companyTelephone)

	function handleChange() {}

	function handleSubmit() {}

	return (
		<form onSubmit={handleSubmit}>
			<div className="left-side">
				<label htmlFor="name">
					Company Name:
					<input
						name="Company Name"
						onChange={handleChange}
						id="name"
						value={name}
					/>
				</label>
				<label htmlFor="address">
					Address:
					<input
						onChange={handleChange}
						id="address"
						value={address}
					/>
				</label>
				<label htmlFor="country">
					Country:
					<input
						onChange={handleChange}
						id="country"
						value={country}
					/>
				</label>
			</div>
			<div className="right-side">
				<label htmlFor="company-code">
					Company Code:
					<input
						onChange={handleChange}
						id="company-code"
						value={code}
					/>
				</label>
				<label htmlFor="vat">
					Vat:
					<input onChange={handleChange} id="vat" value={vat} />
				</label>
				<label htmlFor="phone">
					Phone number:
					<input onChange={handleChange} id="phone" value={phone} />
				</label>
			</div>
		</form>
	)
}

export default CompanyDetails
