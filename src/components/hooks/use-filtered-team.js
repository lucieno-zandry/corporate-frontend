import { filterTeam } from "../../utils/filter-team/filter-team";
import { useTeamSearchQuery } from "../hooks/use-team-search-query"
import { useTeam } from "./use-team";

export const useFilteredTeam = () => {
    const [query] = useTeamSearchQuery();
    const [team] = useTeam();

    const filteredTeam = filterTeam(team, query);

    return filteredTeam;
}