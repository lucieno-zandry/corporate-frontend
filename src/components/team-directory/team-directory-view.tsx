import { TeamMember } from "../../types";
import { TeamListView } from "../team-list/team-list-view";
import { TeamListEmptyView } from "./team-directory-empty-view";

interface TeamDirectoryViewProps {
    team: TeamMember[]
}

export const TeamDirectoryView = ({ team }: TeamDirectoryViewProps) => {

    if (team.length === 0) return <TeamListEmptyView />
    return <TeamListView team={team} />;
}