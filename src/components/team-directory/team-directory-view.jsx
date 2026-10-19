import { TeamListView } from "../team-list/team-list-view";
import { TeamListEmptyView } from "./team-directory-empty-view";

export const TeamDirectoryView = ({ team }) => {
    
    if (team.length === 0) return <TeamListEmptyView />
    return <TeamListView team={team} />;
}