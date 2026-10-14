import { useContext } from "react";
import { TeamSearchQueryContext } from "../global-states/team-search-query";

export const useTeamSearchQuery = () => {
    const context = useContext(TeamSearchQueryContext);

    if (context === undefined) {
        throw new Error(
            "useTeamSearchQuery must be used within a <TeamSearchQueryProvider>",
        );
    }

    const { query, setQuery } = context;
    return { query, setQuery };
};