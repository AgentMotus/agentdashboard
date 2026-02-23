import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: 24 }}>
      <h1>AgentDashboard</h1>
      <p>Foundation scaffold ready: auth, RBAC, tasks, agents, chats, wallets, audit.</p>
      <ul>
        <li><Link href="/dashboard">Go to dashboard</Link></li>
        <li><Link href="/api/health">Health endpoint</Link></li>
      </ul>
    </main>
  );
}
