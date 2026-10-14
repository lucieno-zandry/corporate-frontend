import { createContext, useState } from "react";

export const TeamSearchQueryContext = createContext(undefined);

export const TeamSearchQueryProvider = ({ children }) => {
    const [query, setQuery] = useState('');

    return <TeamSearchQueryContext.Provider value={{ query, setQuery }}>
        {children}
    </TeamSearchQueryContext.Provider>
}