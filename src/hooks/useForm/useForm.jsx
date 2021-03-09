import { useState, useEffect } from 'react'

const useForm = () => {
	const [values, setValues] = useState({
		name: 'Candies Trade LTD',
		address: 'Isgalvota 22, LT0342, Vilnius',
		country: 'Lithuania',
		code: '3023123121',
		vat: 'LT0012121212112',
		phone: '370020202020',
	})

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

	return { values, handleChange, handleSubmit, errors }
}

export default useForm
