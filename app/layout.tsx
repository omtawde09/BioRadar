import React from 'react';
import { Agentation } from 'agentation';

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const isDev = process.env.NODE_ENV === 'development' || process.env.AGENTATION_ENABLED === 'true';

  return (
    <html lang="en">
      <body>
        {children}
        {isDev && (
          <Agentation
            endpoint={process.env.NEXT_PUBLIC_AGENTATION_ENDPOINT || 'http://host.docker.internal:4747'}
          />
        )}
      </body>
    </html>
  );
}
