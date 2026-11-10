import { SubmitEventHandler } from "react";
import { TeamMember } from "../../types";
import { AddMemberForm } from "../add-member-form/add-member-form";
import { TeamListView } from "../team-list/team-list-view";
import { TeamListEmptyView } from "./team-directory-empty-view";
import { TeamDirectoryErrorView } from "./team-directory-error-view";
import { TeamDirectoryLoadingView } from "./team-directory-loading-view";

interface TeamDirectoryViewProps {
    team: TeamMember[],
    isPending: boolean,
    error: Error | null,
    isAddTeamPending: boolean,
    onAddTeamSubmit: SubmitEventHandler<HTMLFormElement>
}

export const TeamDirectoryView = ({ team, isPending, error, isAddTeamPending, onAddTeamSubmit }: TeamDirectoryViewProps) => {

    // 1. Determine what to show in the list area
    const renderDirectoryContent = () => {
        if (error) return <TeamDirectoryErrorView error={error} />
        if (isPending) return <TeamDirectoryLoadingView />
        if (team.length === 0) return <TeamListEmptyView />
        return <TeamListView team={team} />
    }

    // 2. Render the content, followed by the form (which is always visible)
    return (
        <>
            {renderDirectoryContent()}
            <AddMemberForm onSubmit={onAddTeamSubmit} isPending={isAddTeamPending} />
        </>
    )
}