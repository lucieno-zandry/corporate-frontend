import { stripString } from "../strip-string/strip-string"

/**
 * @param {Array<{ id: number, name: string, role: string }>} team
 * @param {string} query
 * @returns {Array<{ id: number, name: string, role: string }>}
 */
export const filterTeam = (team, query) => {
    return team.filter(member =>
        stripString(member.name).includes(stripString(query))
    )
}