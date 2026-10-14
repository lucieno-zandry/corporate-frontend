import { TeamListEmptyView } from "../team-list-empty/team-list-empty-view";
import { TeamListView } from "../team-list/team-list-view";

export const TeamDirectoryView = ({ team }) => {
    
    if (team.length === 0) return <TeamListEmptyView />
    return <TeamListView team={team} />;
}