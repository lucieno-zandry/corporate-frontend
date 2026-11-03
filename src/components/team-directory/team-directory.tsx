import { useFilteredTeam } from "../../hooks/use-filtered-team";
import { TeamDirectoryView } from "./team-directory-view";

export const TeamDirectory = () => {
    const { filteredTeam } = useFilteredTeam();
    return <TeamDirectoryView team={filteredTeam} />
}