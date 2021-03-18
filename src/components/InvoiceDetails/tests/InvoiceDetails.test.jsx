import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InvoiceDetails from '../InvoiceDetails'

describe('<InvoiceDetails />', () => {
	it('renders corectly', () => {
		render(<InvoiceDetails />)
		const user = screen.getByRole('textbox', { name: 'Prepared by' })

		expect(user).toBeInTheDocument()
	})

	it('user can enter new values', () => {
		render(<InvoiceDetails />)
		const user = screen.getByRole('textbox', { name: 'Prepared by' })

		userEvent.clear(user)
		userEvent.type(user, 'New Person')

		expect(user).toHaveValue('New Person')
	})

	it('user can select new date', () => {
		render(<InvoiceDetails />)
		const testValue = '2021-03-18'
		const dateInput = screen.getByTestId('date-input')

		userEvent.clear(dateInput)
		userEvent.type(dateInput, testValue)

		expect(dateInput.value).toEqual(testValue)
	})
})
