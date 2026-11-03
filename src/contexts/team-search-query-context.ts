import { createContext } from "react";

interface TeamSearchQueryContextData {
    query: string,
    setQuery: (query: string) => void
}

export const TeamSearchQueryContext = createContext<TeamSearchQueryContextData | undefined>(undefined);
