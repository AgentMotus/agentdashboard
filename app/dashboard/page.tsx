import { DEMO_CURRENT_USER, can } from '@/src/modules/auth/rbac';
import { InMemoryRunStore } from '@/src/modules/agents/runStore';

export default async function DashboardPage() {
  const runStore = new InMemoryRunStore();
  const run = await runStore.startRun({ agentId: 'agent-1', taskId: 'task-1', startedBy: DEMO_CURRENT_USER.id });

  return (
    <main style={{ maxWidth: 1000, margin: '30px auto', padding: 24 }}>
      <h2>Control Plane</h2>
      <p>User: <b>{DEMO_CURRENT_USER.email}</b> ({DEMO_CURRENT_USER.role})</p>
      <p>Can assign tasks: {can(DEMO_CURRENT_USER.role, 'task.assign') ? 'yes' : 'no'}</p>
      <section style={{ marginTop: 24, padding: 16, border: '1px solid #334155', borderRadius: 12 }}>
        <h3>Vertical Slice (demo)</h3>
        <p>Task <code>task-1</code> assigned to <code>agent-1</code></p>
        <p>Run state: <b>{run.status}</b></p>
        <p>Run ID: <code>{run.id}</code></p>
      </section>
    </main>
  );
}
