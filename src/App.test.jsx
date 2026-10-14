import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
    it('filters the team list by name as the user types', async () => {
        const user = userEvent.setup()
        render(<App />)

        // sanity: all members visible initially
        expect(screen.getAllByRole('listitem')).toHaveLength(4)

        await user.type(screen.getByLabelText('Search by name'), 'priya')

        const items = screen.getAllByRole('listitem')
        expect(items).toHaveLength(1)
        expect(items[0]).toHaveTextContent('Priya Ramgoolam')
    })

    it('shows the empty state when nothing matches', async () => {
        const user = userEvent.setup()
        render(<App />)

        await user.type(screen.getByLabelText('Search by name'), 'zzz')

        expect(screen.getByText('No team members found.')).toBeInTheDocument()
        expect(screen.queryByRole('list')).not.toBeInTheDocument()
    })
})