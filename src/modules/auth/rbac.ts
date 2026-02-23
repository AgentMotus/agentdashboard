export type Role = 'owner' | 'admin' | 'operator' | 'viewer';
export type Permission = 'task.create' | 'task.assign' | 'agent.run' | 'wallet.create' | 'wallet.approve' | 'audit.read';

const rolePermissions: Record<Role, Permission[]> = {
  owner: ['task.create', 'task.assign', 'agent.run', 'wallet.create', 'wallet.approve', 'audit.read'],
  admin: ['task.create', 'task.assign', 'agent.run', 'wallet.create', 'wallet.approve', 'audit.read'],
  operator: ['task.create', 'task.assign', 'agent.run', 'audit.read'],
  viewer: ['audit.read']
};

export const DEMO_CURRENT_USER = {
  id: 'u_demo_1',
  email: 'agentmotus@users.noreply.github.com',
  role: 'owner' as Role
};

export function can(role: Role, permission: Permission): boolean {
  return rolePermissions[role].includes(permission);
}
