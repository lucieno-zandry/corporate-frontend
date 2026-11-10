import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import App from './App'
import { renderWithProviders } from './test-utils'
import * as api from './api/team' // Import the API module

// Mock the API module so we can control it
vi.mock('./api/team')

describe('App', () => {
    beforeEach(() => {
        // Before each test, make the mock return data instantly
        vi.mocked(api.fetchTeam).mockResolvedValue([
            { id: 1, name: 'Aisha Beeharry', role: 'Product Designer' },
            { id: 2, name: 'Jean-Luc Morel', role: 'Frontend Engineer' },
            { id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },
            { id: 4, name: 'Tiana Rakoto', role: 'QA Engineer' },
        ])
    })

    it('filters the team list by name as the user types', async () => {
        const user = userEvent.setup()
        renderWithProviders(<App />)

        // Now it will load instantly
        const initialItems = await screen.findAllByRole('listitem')
        expect(initialItems).toHaveLength(4)

        await user.type(screen.getByLabelText('Search by name'), 'priya')

        const items = screen.getAllByRole('listitem')
        expect(items).toHaveLength(1)
        expect(items[0]).toHaveTextContent('Priya Ramgoolam')
    })

    it('shows a loading state initially', () => {
        // Make the mock hang forever so we stay in the loading state
        vi.mocked(api.fetchTeam).mockReturnValue(new Promise(() => { }))

        renderWithProviders(<App />)
        expect(screen.getByText(/Loading team/i)).toBeInTheDocument()
    })

    it('shows an error state if the API fails', async () => {
        // Make the mock reject
        vi.mocked(api.fetchTeam).mockRejectedValue(new Error('Network failed'))

        renderWithProviders(<App />)

        // Wait for the error view to appear
        expect(await screen.findByText('Network failed')).toBeInTheDocument()
    });

    // Inside your describe block:
    it('adds a new member to the list', async () => {
        const user = userEvent.setup()

        const initialTeam = [
            { id: 1, name: 'Aisha Beeharry', role: 'Product Designer' },
            { id: 2, name: 'Jean-Luc Morel', role: 'Frontend Engineer' },
            { id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },
            { id: 4, name: 'Tiana Rakoto', role: 'QA Engineer' },
        ]
        const newTeam = [
            ...initialTeam,
            { id: 99, name: 'New Guy', role: 'Tester' }
        ]

        let returnNewTeam = false
        vi.mocked(api.fetchTeam).mockImplementation(async () => {
            if (returnNewTeam) return newTeam
            return initialTeam
        })

        vi.mocked(api.addTeamMember).mockImplementation(async () => {
            returnNewTeam = true // Flip the switch when the mutation happens
            return { id: 99, name: 'New Guy', role: 'Tester' }
        })

        renderWithProviders(<App />)

        // 1. Wait for initial load
        const initialItems = await screen.findAllByRole('listitem')
        expect(initialItems).toHaveLength(4)

        // 2. Fill out the form
        await user.type(screen.getByLabelText('Member name'), 'New Guy')
        await user.type(screen.getByLabelText('Member role'), 'Tester')
        await user.click(screen.getByRole('button', { name: /Add member/i }))

        expect(await screen.findByText(/New Guy/)).toBeInTheDocument()

        // 4. Now that we know the refetch is done, check the total count
        const updatedItems = screen.getAllByRole('listitem')
        expect(updatedItems).toHaveLength(5)
    });
});