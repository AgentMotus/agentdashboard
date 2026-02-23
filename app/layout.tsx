import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'AgentDashboard',
  description: 'Control plane for multi-agent operations'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, sans-serif', margin: 0, background: '#0b1020', color: '#e5e7eb' }}>
        {children}
      </body>
    </html>
  );
}
