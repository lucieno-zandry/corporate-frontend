// src/components/team-list/team-list-view.test.jsx
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamListView } from './team-list-view'

const team = [
    { id: 1, name: 'Ada Lovelace', role: 'Frontend Engineer' },
    { id: 2, name: 'Grace Hopper', role: 'Backend Engineer' },
    { id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },
]

describe('TeamListView', () => {
    it('renders a list', () => {
        render(<TeamListView team={team} />)

        expect(screen.getByRole('list')).toBeInTheDocument()
    })

    it('renders one item per team member', () => {
        render(<TeamListView team={team} />)

        expect(screen.getAllByRole('listitem')).toHaveLength(team.length)
    })

    it('renders each member name and role', () => {
        render(<TeamListView team={team} />)

        const item = screen.getByText(/Ada Lovelace/)
        expect(item).toHaveTextContent('Ada Lovelace')
        expect(item).toHaveTextContent('Frontend Engineer')
    })

    it('renders an empty list when the team is empty', () => {
        render(<TeamListView team={[]} />)

        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.queryAllByRole('listitem')).toHaveLength(0)
    })
})