import { useState, useEffect } from 'react'

const useForm = (formType) => {
	const [newFormType, setNewFormType] = useState(formType)

	const [values, setValues] = useState({
		name: 'Candies Trade LTD',
		address: 'Isgalvota 22, LT0342, Vilnius',
		country: 'Lithuania',
		code: '3023123121',
		vat: 'LT0012121212112',
		phone: '370020202020',
	})

	useEffect(() => {
		if (newFormType === 'conpany-details') {
			setValues({
				name: 'Candies Trade LTD',
				address: 'Isgalvota 22, LT0342, Vilnius',
				country: 'Lithuania',
				code: '3023123121',
				vat: 'LT0012121212112',
				phone: '370020202020',
			})
		}

		if (newFormType === 'ship-to') {
			setValues({
				companyName: '',
				cityAndStreet: '',
				country: '',
				postalCode: '',
				aditionalCompanyDetails: '',
				airport: '',
				shipToRegion: '',
				shipToCountry: '',
			})
		}

		if (newFormType === 'invoice') {
			setValues({
				invoiceNumber: '',
				poRef: '',
				terms: '',
				shipVia: '',
				accNumber: '',
				preparedBy: 'Paul',
			})
		}
	}, [newFormType])

	const [errors, setErrors] = useState()

	function handleChange(event) {
		const { name, value } = event.target

		setValues({
			...values,
			[name]: value,
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
	}

	function handleAutocomplete(data) {
		// fill the form if autocomplete was selected
	}

	return { values, handleChange, handleSubmit, errors }
}

export default useForm
