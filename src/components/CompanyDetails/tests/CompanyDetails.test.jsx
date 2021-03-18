import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CompanyDetails from '../CompanyDetails'

describe('<CompanyDetails />', () => {
	it('Renders correctly with default values', () => {
		render(<CompanyDetails />)
		const companyName = screen.getByRole('textbox', {
			name: /company name/i,
		})
		const vatNumber = screen.getByRole('textbox', { name: /vat/i })

		expect(companyName).toHaveValue('Candies Trade LTD')
		expect(vatNumber).toHaveValue('LT0012121212112')
	})

	it('Allows user to edit default values', () => {
		render(<CompanyDetails />)
		const companyName = screen.getByRole('textbox', {
			name: /company name/i,
		})

		userEvent.clear(companyName)
		userEvent.type(companyName, 'New Trade LTD')

		expect(companyName).toHaveValue('New Trade LTD')
	})
})
