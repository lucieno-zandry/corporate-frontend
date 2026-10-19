import { TeamContext } from "../contexts/team";
import { team as defaultTeam } from "../data/team";

export const TeamProvider = ({ children, team = defaultTeam}) => {
    return <TeamContext.Provider value={team}>
        {children}
    </TeamContext.Provider>
}