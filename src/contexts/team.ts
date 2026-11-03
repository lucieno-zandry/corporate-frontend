import { createContext } from "react";
import { TeamMember } from "../types";

export const TeamContext = createContext<TeamMember[] | undefined>(undefined);
