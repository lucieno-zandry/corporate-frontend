import { useContext } from "react"
import { TeamContext } from "../global-states/team";

export const useTeam = () => {
    const team = useContext(TeamContext);

    if (team === undefined) {
        throw new Error("useTeam must be used within a <TeamProvider>");
    }

    return {team};
};