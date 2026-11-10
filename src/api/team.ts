import type { TeamMember } from "../types";
import { team as mockData } from "../data/team";

export const fetchTeam = async (): Promise<TeamMember[]> => {
    // Simulate a 1-second network delay so we can see the loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return mockData;
};

export const addTeamMember = async (newMember: Omit<TeamMember, 'id'>): Promise<TeamMember> => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network

    // Simulate creating an ID on the server
    const createdMember: TeamMember = {
        ...newMember,
        id: Math.floor(Math.random() * 10000),
    };

    mockData.push(createdMember);

    return createdMember;
};