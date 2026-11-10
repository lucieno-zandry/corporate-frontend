import { SubmitEventHandler } from "react";
import { useAddTeamMember } from "../../hooks/use-add-team-member";
import { useFilteredTeam } from "../../hooks/use-filtered-team";
import { TeamDirectoryView } from "./team-directory-view";

export const TeamDirectory = () => {
    const { filteredTeam, error, isPending } = useFilteredTeam();
    const { isPending: isAddTeamPending, mutateAsync } = useAddTeamMember();

    const handleAddTeamSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const name = formData.get('name')?.toString() ?? '';
        const role = formData.get('role')?.toString() ?? '';

        await mutateAsync({ name, role });
        
        e.target.reset();
    }

    return <TeamDirectoryView
        team={filteredTeam}
        error={error}
        isPending={isPending}
        isAddTeamPending={isAddTeamPending}
        onAddTeamSubmit={handleAddTeamSubmit}
    />
}