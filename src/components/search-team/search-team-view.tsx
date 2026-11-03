interface SearchTeamViewProps {
    query: string,
    setQuery: (query: string) => void
}

export const SearchTeamView = ({ query, setQuery }: SearchTeamViewProps) => {
    return <>
        <label htmlFor="search">Search by name</label>
        <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Priya"
            role="searchbox"
        />
    </>
}