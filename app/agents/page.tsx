const AGENTS = [
  { name: 'AgentMotus', status: 'active', runs: 23, lastRun: '2 min ago', capability: 'General ops' },
  { name: 'ResearchAgent', status: 'active', runs: 8, lastRun: '15 min ago', capability: 'Funding intel' },
  { name: 'TradingAgent', status: 'paused', runs: 41, lastRun: '1h ago', capability: 'Market analysis' },
  { name: 'DevAgent', status: 'active', runs: 5, lastRun: '30 min ago', capability: 'Code & infra' },
];

export default function AgentsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Agents</h2>
        <button className="ui-btn ui-btn-primary">+ Register Agent</button>
      </div>

      <div className="ui-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-white/60">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Capability</th>
              <th className="px-5 py-3 font-medium">Runs</th>
              <th className="px-5 py-3 font-medium">Last Run</th>
            </tr>
          </thead>
          <tbody>
            {AGENTS.map((a) => (
              <tr key={a.name} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="px-5 py-3 font-medium text-white">{a.name}</td>
                <td className="px-5 py-3">
                  <span
                    className="ui-badge"
                    style={{
                      background: a.status === 'active' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                      color: a.status === 'active' ? 'var(--success)' : 'var(--warning)',
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: a.status === 'active' ? 'var(--success)' : 'var(--warning)' }}
                    />
                    {a.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-white/70">{a.capability}</td>
                <td className="px-5 py-3 text-white/70">{a.runs}</td>
                <td className="px-5 py-3 text-white/70">{a.lastRun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
