export const TeamListView = ({ team }) => {
    return <ul>
        {team.map((member) => (
            <li key={member.id}>
                {member.name} — {member.role}
            </li>
        ))}
    </ul>
}
