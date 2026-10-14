import { useTeamSearchQuery } from "../hooks/use-team-search-query"
import { SearchTeamView } from "./search-team-view";

export const SearchTeam = () => {
    const [query, setQuery] = useTeamSearchQuery();

    return <SearchTeamView query={query} setQuery={setQuery} />
}