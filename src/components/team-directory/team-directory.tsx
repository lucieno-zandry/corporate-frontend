import { useFilteredTeam } from "../../hooks/use-filtered-team";
import { TeamDirectoryView } from "./team-directory-view";

export const TeamDirectory = () => {
    const { filteredTeam, error, isPending } = useFilteredTeam();

    return <TeamDirectoryView
        team={filteredTeam}
        error={error}
        isPending={isPending} />
}