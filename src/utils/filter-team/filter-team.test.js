import { describe, expect, it } from "vitest";
import { filterTeam } from "./filter-team";

export const team = [
    { id: 1, name: 'Aisha Beeharry', role: 'Product Designer' },
    { id: 2, name: 'Jean-Luc Morel', role: 'Frontend Engineer' },
    { id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },
    { id: 4, name: 'Tiana Rakoto', role: 'QA Engineer' },
]

describe('Filter Team', () => {
    it('Returns the original team for an empty string', () => {
        expect(filterTeam(team, '')).toEqual(team);
    });

    it('returns one team for one match', () => {
        expect(filterTeam(team, 'priya')).toEqual([
            { id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },
        ])
    })

    it('is case Insensitive', () => {
        expect(filterTeam(team, 'PrIYA')).toEqual([{ id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },])
    })

    it('returns an empty array when there is no match', () => {
        expect(filterTeam(team, 'Unknown')).toEqual([])
    })

    it('ignores surrounding whitespace', () => {
        expect(filterTeam(team, '  priya  ')).toEqual([
            { id: 3, name: 'Priya Ramgoolam', role: 'Backend Engineer' },
        ])
    })
})