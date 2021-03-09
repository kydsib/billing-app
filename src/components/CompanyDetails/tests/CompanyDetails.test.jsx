import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CompanyDetails from '../CompanyDetails'

describe('<CompanyDetails />', () => {
	it('Renders correctly with default values', () => {
		const props = {
			companyName: 'Candies Trade LTD',
			companyAddress: 'Isgalvota 22, LT0342, Vilnius',
			companyCountry: 'Lithuania',
			companyCode: '3023123121',
			companyVatNumber: 'LT0012121212112',
			companyTelephone: '370020202020',
		}
		render(<CompanyDetails {...props} />)

		const companyName = screen.getByRole('textbox', {
			name: 'Company Name:',
		})
		expect(companyName).toHaveValue('Candies Trade LTD')

		const vatNumber = screen.getByRole('textbox', { name: /vat/i })

		expect(vatNumber).toHaveValue('LT0012121212112')
	})

	it('Allows user to edit default values', () => {
		render(<CompanyDetails />)

		const companyName = screen.getByRole('textbox', {
			name: 'Company Name:',
		})
		userEvent.type(companyName, 'New Trade LTD')

		expect(companyName).toHaveValue('New Trade LTD')
	})
})
