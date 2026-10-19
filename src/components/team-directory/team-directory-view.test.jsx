import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { TeamDirectoryView } from "./team-directory-view"

const team = [
    { id: 1, name: 'Aisha Beeharry', role: 'Product Designer' },
    { id: 2, name: 'Jean-Luc Morel', role: 'Frontend Engineer' },
    { id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },
    { id: 4, name: 'Tiana Rakoto', role: 'QA Engineer' },
]

describe('TeamDirectoryView', () => {
    it('shows the empty message when there are no team members', () => {
        render(<TeamDirectoryView team={[]} />)

        expect(screen.getByText('No team members found.')).toBeInTheDocument()
    })

    it('renders a list when the team has members', () => {
        render(<TeamDirectoryView team={team} />)

        expect(screen.getByRole('list')).toBeInTheDocument();
    })
})