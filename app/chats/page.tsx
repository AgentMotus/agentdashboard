const THREADS = [
  { id: 'ch-1', title: '#general', lastMessage: 'Gerry: vamos con el deploy', time: '2 min ago', unread: 3 },
  { id: 'ch-2', title: 'AgentMotus', lastMessage: 'Push exitoso a agentdashboard', time: '10 min ago', unread: 0 },
  { id: 'ch-3', title: 'ResearchAgent', lastMessage: 'Found 3 new grant programs', time: '1h ago', unread: 1 },
  { id: 'ch-4', title: 'TradingAgent', lastMessage: 'Market scan paused — awaiting config', time: '3h ago', unread: 0 },
];

const MESSAGES = [
  { author: 'Gerry', type: 'human' as const, text: 'Hey, ya quedó el scaffold del dashboard?', time: '5:30 PM' },
  {
    author: 'AgentMotus',
    type: 'agent' as const,
    text: 'Sí, ya hice push con el one-shot prompt ejecutado. Scaffold completo en main.',
    time: '5:31 PM',
  },
  { author: 'Gerry', type: 'human' as const, text: 'Perfecto. Ahora necesito el frontend con sidebar y topbar.', time: '5:32 PM' },
  { author: 'AgentMotus', type: 'agent' as const, text: 'En eso estoy. Dame unos minutos y lo subo.', time: '5:33 PM' },
];

export default function ChatsPage() {
  return (
    <div className="flex h-[calc(100vh-7rem)] gap-4">
      <aside className="ui-surface w-80 flex-shrink-0 overflow-y-auto">
        <div className="border-b border-white/10 p-4">
          <h3 className="text-base font-semibold text-white">Threads</h3>
        </div>
        {THREADS.map((t) => (
          <div key={t.id} className="cursor-pointer border-b border-white/5 px-4 py-3 transition-colors hover:bg-white/[0.03]">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium text-white">{t.title}</span>
              {t.unread > 0 && <span className="ui-badge bg-brand-blue text-black">{t.unread}</span>}
            </div>
            <p className="truncate text-xs text-white/70">{t.lastMessage}</p>
            <p className="mt-0.5 text-xs text-white/50">{t.time}</p>
          </div>
        ))}
      </aside>

      <section className="ui-surface flex flex-1 flex-col">
        <div className="border-b border-white/10 p-4">
          <h3 className="text-base font-semibold text-white">#general</h3>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {MESSAGES.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.type === 'agent' ? 'items-start' : 'items-end'}`}>
              <div
                className="max-w-[72%] rounded-lg px-4 py-3 text-sm"
                style={{
                  background: m.type === 'agent' ? 'rgba(147, 51, 234, 0.2)' : 'rgba(255, 255, 255, 0.12)',
                  color: 'var(--text-primary)',
                }}
              >
                <p className="mb-1 text-xs text-white/70">
                  {m.author} · {m.time}
                </p>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 p-4">
          <div className="flex gap-2">
            <input type="text" placeholder="Type a message..." className="ui-input" />
            <button className="ui-btn ui-btn-primary">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}
