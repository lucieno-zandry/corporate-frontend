import { PropsWithChildren, useState } from "react";
import { TeamSearchQueryContext } from "../contexts/team-search-query-context";


export const TeamSearchQueryProvider = ({ children }: PropsWithChildren) => {
    const [query, setQuery] = useState('');

    return <TeamSearchQueryContext.Provider value={{ query, setQuery }}>
        {children}
    </TeamSearchQueryContext.Provider>
}