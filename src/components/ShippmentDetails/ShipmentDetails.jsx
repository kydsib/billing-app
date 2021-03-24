import React, { useState, useEffect } from 'react'
import useForm from '../../hooks/useForm/useForm.jsx'

import primaryData from './initialDropdownData.js'

// TODO wirte useDebounce hook when DB connected
const ShipmentDetails = () => {
	const formType = 'ship-to'
	const [searchTerm, setSearchTerm] = useState()
	// TODO how to implement useFOrm?
	// const { handleChange, handleSubmit, values, errors } = useFrom(formType)

	const [result, setResult] = useState({
		//TODO id use existing if company is new, add one
		companyName: searchTerm,
		cityAndStreet: '',
		country: '',
		postalCode: '',
		aditionalCompanyDetails: '',
		airport: '',
		shipToRegion: '',
		shipToCountry: '',
	})

	const [suggestions, setSuggestions] = useState()
	const [noMatch, setNoMatch] = useState()

	function handleChange(event) {
		const input = event.currentTarget.value

		setSearchTerm(input)
	}

	useEffect(() => {
		if (searchTerm) {
			const matchedValues = primaryData.filter((item) =>
				item.companyName
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			)

			setSuggestions(matchedValues)
		} else {
			setNoMatch('No match')
		}
	}, [searchTerm])

	useEffect(() => {
		setSearchTerm('')
		setSuggestions('')
		// TODO - fix no match is found, when users select data to auto complete
	}, [result])

	function handlePickedSugestion(id) {
		let autofillData = primaryData.filter((item) => item.id === id)
		setResult(autofillData[0])
	}

	return (
		<form>
			<div className="company-details">
				<label htmlFor="company">To</label>
				<input
					onChange={handleChange}
					name="company-name"
					id="company"
					value={result.companyName}
				/>
				<ul>
					{suggestions && suggestions.length > 0 ? (
						suggestions.map((item, index) => (
							//TODO use index to add class for active field?
							<li
								onClick={() => handlePickedSugestion(item.id)}
								key={item.id}
							>
								{item.companyName}
							</li>
						))
					) : (
						<p>{noMatch}</p>
					)}
				</ul>
				<label htmlFor="country-code">Country code</label>
				<input
					id="country-code"
					onChange={handleChange}
					value={result.cityAndStreet}
				/>
				<label htmlFor="street-address">Street Address</label>
				{/* <input
					id="street-address"
					onChange={handleChange}
					defaultValue="Add this field to obj"
				/> */}
				<label htmlFor="postal-code">Street Address 2</label>
				<input
					id="postal-code"
					onChange={handleChange}
					value={result.postalCode}
				/>
				<label htmlFor="country">Country</label>
				<input
					name="country"
					id="country"
					onChange={handleChange}
					value={result.country}
				/>
			</div>
			<div className="ship-to">
				<label htmlFor="company">Ship to</label>
				<input
					name="company-name"
					id="company"
					onChange={handleChange}
					value={result.aditionalCompanyDetails}
				/>
				{/* <label htmlFor="country-code">Country code</label>
				<input
					id="country-code"
					onChange={handleChange}
					defaultValue="Add more values to obj"
				/> */}
				<label htmlFor="street-address">Street Address</label>
				<input
					id="street-address"
					onChange={handleChange}
					value={result.airport}
				/>
				<label htmlFor="street-address2">Street Address 2</label>
				<input
					id="street-address2"
					onChange={handleChange}
					value={result.shipToRegion}
				/>
				<label htmlFor="country">Country</label>
				<input
					name="country"
					id="country"
					onChange={handleChange}
					value={result.shipToCountry}
				/>
			</div>
		</form>
	)
}

export default ShipmentDetails
