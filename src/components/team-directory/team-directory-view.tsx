import { TeamMember } from "../../types";
import { TeamListView } from "../team-list/team-list-view";
import { TeamListEmptyView } from "./team-directory-empty-view";
import { TeamDirectoryErrorView } from "./team-directory-error-view";
import { TeamDirectoryLoadingView } from "./team-directory-loading-view";

interface TeamDirectoryViewProps {
    team: TeamMember[],
    isPending: boolean,
    error: Error | null,
}

export const TeamDirectoryView = ({ team, isPending, error }: TeamDirectoryViewProps) => {
    if(error) return <TeamDirectoryErrorView error={error}/>
    if (isPending) return <TeamDirectoryLoadingView />
    if (team.length === 0) return <TeamListEmptyView />

    return <TeamListView team={team} />
}