import { SearchTeam } from "./components/search-team/search-team";
import { TeamDirectory } from "./components/team-directory/team-directory";
import { TeamProvider } from "./global-states/team";
import { TeamSearchQueryProvider } from "./global-states/team-search-query";

export default function App() {
  return (
    <TeamSearchQueryProvider>
      <TeamProvider>
        <main>
          <h1>Team Directory</h1>

          <SearchTeam />
          <TeamDirectory />
        </main>
      </TeamProvider>
    </TeamSearchQueryProvider>
  )
}