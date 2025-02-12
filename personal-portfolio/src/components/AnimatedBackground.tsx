'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const AnimatedBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  interface VantaEffect {
    destroy: () => void;
  }
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const loadVanta = async () => {
      try {
        const THREE = await import('three');
        const BIRDS = (await import('vanta/dist/vanta.birds.min')).default;

        if (!vantaEffect && vantaRef.current) {
          const effect = BIRDS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0x0075ff,
            color2: 0x4fb2ff,
            colorMode: "variance",
            birdSize: 1.50,
            wingSpan: 30.00,
            speedLimit: 1.50,
            separation: 250.00,
            alignment: 10.00,
            cohesion: 3.00,
            quantity: 1.00,
            backgroundAlpha: 0.0,
            fps: 30
          });
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error('Error initializing Vanta effect:', error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
      }
    };
  }, [isMounted, vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 -z-10 transparent-bg no-pointer-events"
    />
  );
};

export default dynamic(() => Promise.resolve(AnimatedBackground), { ssr: false });