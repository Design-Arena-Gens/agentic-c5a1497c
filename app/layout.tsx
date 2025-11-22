import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complex Modular App - Project Management',
  description: 'Demonstration of clean architecture and modular code organization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#f9fafb' }}>
        {children}
      </body>
    </html>
  );
}
