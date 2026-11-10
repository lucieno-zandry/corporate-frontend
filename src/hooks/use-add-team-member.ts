import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTeamMember } from "../api/team";

export const useAddTeamMember = () => {
    const queryClient = useQueryClient(); // Access the cache!

    return useMutation({
        mutationFn: addTeamMember,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['fetchTeam'] });
        },
    });
};