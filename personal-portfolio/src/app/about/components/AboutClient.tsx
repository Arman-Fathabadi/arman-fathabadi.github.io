'use client';

import { useState, useEffect } from 'react';
import AboutContent from './AboutContent';

export default function AboutClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <AboutContent />;
}