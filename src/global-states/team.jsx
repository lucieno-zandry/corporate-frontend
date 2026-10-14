import { createContext, useState } from "react";
import { team as defaultTeam } from "../data/team";

export const TeamContext = createContext(null);

export const TeamProvider = ({ children, team = defaultTeam}) => {
    return <TeamContext.Provider value={team}>
        {children}
    </TeamContext.Provider>
}