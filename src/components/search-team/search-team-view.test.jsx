import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchTeamView } from "./search-team-view";
import userEvent from "@testing-library/user-event";

describe('SearchTeamView', () => {
    it('renders the label and search input', () => {
        render(<SearchTeamView query={''} setQuery={(() => { })} />)

        expect(screen.getByLabelText('Search by name')).toBeInTheDocument();
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
    })

    it('shows the query as the input value', () => {
        render(<SearchTeamView query={'Priya'} setQuery={(() => { })} />)

        expect(screen.getByRole('searchbox')).toHaveValue('Priya');
    })

    it('shows the placeholder', () => {
        render(<SearchTeamView query="" setQuery={() => { }} />)

        expect(screen.getByPlaceholderText('e.g. Priya')).toBeInTheDocument()
    })

    it('Calls setQuery with the latest value', async () => {
        const setQuery = vi.fn();
        const user = userEvent.setup();

        render(<SearchTeamView query={''} setQuery={setQuery} />)

        await user.type(screen.getByRole('searchbox'), 'Priya');

        expect(setQuery).toHaveBeenCalled();
    })

    it('reflects a new query prop when it changes', () => {
        const { rerender } = render(
            <SearchTeamView query="" setQuery={() => { }} />
        )

        rerender(<SearchTeamView query="Priya" setQuery={() => { }} />)

        expect(screen.getByRole('searchbox')).toHaveValue('Priya')
    })
})