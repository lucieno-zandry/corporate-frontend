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
        render(<TeamDirectoryView team={[]} error={null} isPending={false} isAddTeamPending={false} onAddTeamSubmit={() => { }} />)

        expect(screen.getByText('No team members found.')).toBeInTheDocument()
    })

    it('renders a list when the team has members', () => {
        render(<TeamDirectoryView team={team} error={null} isPending={false} isAddTeamPending={false} onAddTeamSubmit={() => { }} />)

        expect(screen.getByRole('list')).toBeInTheDocument();
    })

    it('shows the loading state when isPending is true', () => {
        render(<TeamDirectoryView team={[]} error={null} isPending={true} isAddTeamPending={false} onAddTeamSubmit={() => { }} />)

        expect(screen.getByText(/Loading team/i)).toBeInTheDocument()
        expect(screen.queryByRole('list')).not.toBeInTheDocument()
    })

    it('shows the error state when an error is passed', () => {
        const error = new Error('Network failed')
        render(<TeamDirectoryView team={[]} error={error} isPending={false} isAddTeamPending={false} onAddTeamSubmit={() => { }} />)

        expect(screen.getByText('Network failed')).toBeInTheDocument()
        expect(screen.queryByRole('list')).not.toBeInTheDocument()
    })

    it('always renders the add member form, even when the list is empty', () => {
        render(<TeamDirectoryView team={[]} error={null} isPending={false} isAddTeamPending={false} onAddTeamSubmit={() => { }} />)

        expect(screen.getByRole('button', { name: /Add member/i })).toBeInTheDocument()
    })

    it('disables the form button when adding a member', () => {
        render(<TeamDirectoryView team={[]} error={null} isPending={false} isAddTeamPending={true} onAddTeamSubmit={() => { }} />)

        const button = screen.getByRole('button', { name: /Adding/i })
        expect(button).toBeInTheDocument()
        expect(button).toBeDisabled()
    })
})