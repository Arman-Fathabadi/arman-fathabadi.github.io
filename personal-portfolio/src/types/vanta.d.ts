declare module 'vanta/dist/vanta.birds.min' {
  interface VantaBirdsOptions {
    el: HTMLElement;
    THREE: typeof import('three');
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    colorMode?: string;
    birdSize?: number;
    wingSpan?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    quantity?: number;
    backgroundAlpha?: number;
    speedLimit?: number; // Add this line
  }
  
    interface VANTA {
      Effect: VantaEffect;
    }

    interface VantaEffect {
      destroy(): void;
      setOptions(options: Partial<VantaBirdsOptions>): void;
    }
  
    declare global {
      interface Window {
        VANTA: VANTA;
      }
    }
  
    function BIRDS(options: VantaBirdsOptions): VantaEffect;
    export default BIRDS;
  }