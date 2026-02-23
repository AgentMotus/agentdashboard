export type AgentRun = {
  id: string;
  agentId: string;
  taskId: string;
  status: 'queued' | 'running' | 'success' | 'failed';
  startedBy: string;
  createdAt: string;
};

export class InMemoryRunStore {
  private runs: AgentRun[] = [];

  async startRun(input: { agentId: string; taskId: string; startedBy: string }): Promise<AgentRun> {
    const run: AgentRun = {
      id: `run_${Date.now()}`,
      agentId: input.agentId,
      taskId: input.taskId,
      status: 'running',
      startedBy: input.startedBy,
      createdAt: new Date().toISOString()
    };
    this.runs.push(run);
    return run;
  }
}
