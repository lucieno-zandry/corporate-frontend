import { useQuery } from "@tanstack/react-query";
import { fetchTeam } from "../api/team";

export const useTeam = () => {
    const { isPending, error, data: team = [] } = useQuery({
        queryKey: ['fetchTeam'],
        queryFn: fetchTeam,
    });

    return { team, isPending, error };
};