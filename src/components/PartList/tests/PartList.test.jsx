import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import PartList from '../PartList'

describe('<PartList />', () => {
	it('pressing add button creates new SinglePart field', () => {
		render(<PartList />)
		userEvent.click(screen.getByRole('button', { name: /add/i }))
		expect(screen.getByTestId('partNo')).toBeInTheDocument()
	})

	// Should this be moved to SinglePart, and rendered with props passed?
	it('pressing edit button allows to edit SinglePart data', () => {
		render(<PartList />)

		const editedText = 'New description'

		userEvent.click(screen.getByRole('button', { name: /add/i }))
		userEvent.click(screen.getByRole('button', { name: /edit/i }))

		const partNumberInput = screen.getByTestId('single-partNo')

		userEvent.type(partNumberInput, editedText)

		expect(partNumberInput).toHaveValue(editedText)
	})

	it('need to press Confirm delete button in order for delete to work', () => {
		render(<PartList />)

		userEvent.click(screen.getByRole('button', { name: /add/i }))
		const ceatedSinglePart = screen.getByTestId('partNo')
		expect(ceatedSinglePart).toBeInTheDocument()

		userEvent.click(screen.getByRole('button', { name: /delete/i }))

		const confimDeleteBtn = screen.getByRole('button', {
			name: /confirm delete/i,
		})
		expect(confimDeleteBtn).toBeInTheDocument()

		userEvent.click(confimDeleteBtn)

		expect(ceatedSinglePart).not.toBeInTheDocument()
	})

	it('pressing delete button shows pop up comfirmation, pressing cancel wont remove item', () => {
		render(<PartList />)

		userEvent.click(screen.getByRole('button', { name: /add/i }))
		const ceatedSinglePart = screen.getByTestId('partNo')
		expect(ceatedSinglePart).toBeInTheDocument()

		userEvent.click(screen.getByRole('button', { name: /delete/i }))

		const cancelBtn = screen.getByRole('button', { name: /cancel/i })
		expect(cancelBtn).toBeInTheDocument()

		userEvent.click(cancelBtn)

		expect(ceatedSinglePart).toBeInTheDocument()
	})

	it('eddited field would not be saved if save button is not pressed', () => {})
})
