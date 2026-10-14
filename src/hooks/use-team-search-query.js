import { useContext } from "react";
import { TeamSearchQueryContext } from "../global-states/team-search-query";

export const useTeamSearchQuery = () => {
    const context = useContext(TeamSearchQueryContext);

    if (context === null) {
        throw new Error(
            "useTeamSearchQuery must be used within a <TeamSearchQueryProvider>",
        );
    }
    
    return context;
};