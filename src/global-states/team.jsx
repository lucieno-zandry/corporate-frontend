import { createContext, useState } from "react";
import { team as defaultTeam } from "../data/team";

export const TeamContext = createContext(null);

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState(defaultTeam);

    return <TeamContext.Provider value={{ team, setTeam }}>
        {children}
    </TeamContext.Provider>
}