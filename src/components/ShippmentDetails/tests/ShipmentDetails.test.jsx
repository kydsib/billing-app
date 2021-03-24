import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ShipmentDetails from '../ShipmentDetails'

describe('<ShipmentDetails />', () => {
	it('lets user to enter new values', () => {
		render(<ShipmentDetails />)
		const inputPhrase = 'Company details'

		const sendingTo = screen.getByRole('textbox', { name: /to/i })
		userEvent.type(sendingTo, inputPhrase)
		expect(sendingTo).toHaveValue(inputPhrase)
	})

	it('autocompletes and fills the form if company is present in DB', () => {
		// how to add sugestions to input field?
	})
})
