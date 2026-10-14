import { useState } from 'react'
import { team } from './data/team'

export default function App() {
  const [query, setQuery] = useState('')

  // TODO: filter team based on query
  const filteredTeam = team

  return (
    <main>
      <h1>Team Directory</h1>

      <label htmlFor="search">Search by name</label>
      <input
        id="search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. Priya"
      />

      <ul>
        {filteredTeam.map((member) => (
          <li key={member.id}>
            {member.name} — {member.role}
          </li>
        ))}
      </ul>

      {filteredTeam.length === 0 && <p>No team members found.</p>}
    </main>
  )
}