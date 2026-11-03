import { TeamMember } from "../../types"

interface TeamListViewProps {
    team: TeamMember[],
}

export const TeamListView = ({ team }: TeamListViewProps) => {
    return <ul>
        {team.map((member) => (
            <li key={member.id}>
                {member.name} — {member.role}
            </li>
        ))}
    </ul>
}
