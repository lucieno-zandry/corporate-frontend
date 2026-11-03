import { TeamMember } from "../../types"
import { stripString } from "../strip-string/strip-string"

export const filterTeam = (team: TeamMember[], query: string) => {
    return team.filter(member =>
        stripString(member.name).includes(stripString(query))
    )
}