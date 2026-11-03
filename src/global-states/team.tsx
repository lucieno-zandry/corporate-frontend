import { PropsWithChildren } from "react";
import { TeamContext } from "../contexts/team";
import { team as defaultTeam } from "../data/team";
import { TeamMember } from "../types";

interface TeamProviderProps extends PropsWithChildren {
    team?: TeamMember[]
}

export const TeamProvider = ({ children, team = defaultTeam }: TeamProviderProps) => {
    return <TeamContext.Provider value={team}>
        {children}
    </TeamContext.Provider>
}