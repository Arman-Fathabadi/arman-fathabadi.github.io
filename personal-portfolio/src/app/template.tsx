'use client';

import { RootLayoutClient } from './root-layout-client';

export default function Template({ children }: { children: React.ReactNode }) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}