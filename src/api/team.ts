import type { TeamMember } from "../types";
import { team as mockData } from "../data/team";

export const fetchTeam = async (): Promise<TeamMember[]> => {
    // Simulate a 1-second network delay so we can see the loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return mockData;
};