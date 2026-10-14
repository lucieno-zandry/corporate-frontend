import { useContext } from "react"
import { TeamContext } from "../../global-states/team";

export const useTeam = () => {
    const context = useContext(TeamContext);

    if (context === null) {
        throw new Error("useTeam must be used within a <TeamProvider>");
    }

    const { team, setTeam } = context;
    return [team, setTeam];
};